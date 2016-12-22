
let devTSConfig: ts.CompilerOptions = {
    noImplicitAny: true,
    baseUrl: ProjectPaths.ProjectRoot,
    rootDir: ProjectPaths.ProjectRoot,
    jsx: ts.JsxEmit.Preserve,
    moduleResolution: ts.ModuleResolutionKind.NodeJs,
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2015,
};