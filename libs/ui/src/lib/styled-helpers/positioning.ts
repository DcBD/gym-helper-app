import { Styles } from "@gym-helper-app/shared-types"


/**
 * Sets display to flex
 * @returns styles.
 */
export const containerFlex = (): Styles => {
    return {
        display: "flex",
    }
}

export const containerCentered = (): Styles => {
    return {
        ...containerFlex(),
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    }
}