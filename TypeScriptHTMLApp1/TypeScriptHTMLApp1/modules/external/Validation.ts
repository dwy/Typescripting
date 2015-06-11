// module targets: specify configuration in build settings:
// - node.js -> commonjs
// - require.js -> amd

// ReSharper disable InconsistentNaming

export interface StringValidator {
    validate(s: string): boolean;
}
