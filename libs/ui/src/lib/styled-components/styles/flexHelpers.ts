import { Styles } from "@gym-helper-app/shared-types";


export const displayFlex = (): Styles => ({
    display: "flex"
})

export const flexCentered = (): Styles => ({
    ...displayFlex(),
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center"
})