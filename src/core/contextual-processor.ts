namespace MCPCursorExtension {
  export class ContextualProcessor {
    private languageAnalyzer: LanguageAnalyzer;
    private contextRefiner: ContextRefiner;

    constructor() {
      this.languageAnalyzer = new LanguageAnalyzer();
      this.contextRefiner = new ContextRefiner();
    }

    public async analyzeContext(context: IDEContext): Promise<EnrichedContext> {
      const languageFeatures = this.languageAnalyzer.extractFeatures(context);
      const refinedContext = this.contextRefiner.refineContext(context, languageFeatures);
      
      return {
        ...context,
        languageFeatures,
        refinedInsights: refinedContext,
        processingMetadata: this.generateProcessingMetadata(context)
      };
    }

    private generateProcessingMetadata(context: IDEContext): ProcessingMetadata {
      return {
        timestamp: Date.now(),
        processingFlags: this.determineProcessingFlags(context),
        contextualScore: this.calculateContextScore(context)
      };
    }
  }
}