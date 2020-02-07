/**
 * Ich exportiere bewusst nur das, was auch von 
 * übergeordneten Ordnern aus referenziert wird
 * 
 * Sonst referenziert am Ende jede Datei jede andere Datei,
 * was Sachen wie tree-shaking, Bundle Splitting und Lazy 
 * loading (mit existierenden Bundlern) unmöglich macht.
 */

export { Website } from './Website'