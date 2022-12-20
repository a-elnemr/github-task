import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { primaryColor } from "../colors/colors"

export const Star = () => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        viewBox="0 0 24 24"
    >
        <Path
            fill={primaryColor}
            d="m19.65 9.04-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
        />
    </Svg>
)

export const Book = () => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        viewBox="0 0 24 24"
    >
        <Path
            fill={primaryColor}
            d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z"
        />
    </Svg>
)

