import { Tree, formatFiles, installPackagesTask, readProjectConfiguration, generateFiles, joinPathFragments } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

/**
 * Capitalizes first letter of a word.
 */
function capital(val: string) {
  val.replace(/^\w/, (c) => c.toUpperCase());

  return val;
}

/**
 * Adds import to freshly created controller. 
 */
function addControllerImport(tree: Tree, model: string, root: string) {
  const path = `${root}/src/controllers/index.ts`;

  if (!tree.exists(path)) {
    tree.write(path, '');
  }

  let contents = tree.read(path).toString();

  contents += `\n export * from './${capital(model)}Controller'`;

  tree.write(path, contents);
}

function addImports(tree: Tree, schema: any, root: string) {
  addControllerImport(tree, capital(schema.model), root);
}



export default async function (tree: Tree, schema: any) {
  const projectRoot = readProjectConfiguration(tree, schema.name).root;

  generateFiles(
    tree,
    joinPathFragments(__dirname, './files'),
    projectRoot,
    {
      capital,
      tmpl: '',
      ...schema
    }
  );

  addImports(tree, schema, projectRoot);

  return () => {
    installPackagesTask(tree);
  };
}
