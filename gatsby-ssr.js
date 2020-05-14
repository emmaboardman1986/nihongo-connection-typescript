import React from "react";

export function onRenderBody(
    { setHeadComponents }
) {
    setHeadComponents([
        <script type="text/javascript" src="https://static.cdn.prismic.io/prismic.min.js?new=true"></script>
    ]);
}

export { wrapRootElement } from "./wrapRootElement"

