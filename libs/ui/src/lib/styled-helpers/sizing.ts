import { Styles } from "@gym-helper-app/shared-types"


/**
 * Sets container size to `100%` - width and `100vh` - height.
 * @param toggle whether to set container to `100%` width and `100vh` of height.
 * @returns styles.
 */
export const containerFullSize = (toggle = true): Styles => {
    if (!toggle) {
        return {}
    }

    return {
        minWidth: "100%",
        minHeight: "100vh"
    }
}