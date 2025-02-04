namespace MCPCursorExtension {
  export class SystemArchitecture {
    private contextProcessor: ContextualProcessor;
    private providerOrchestrator: ProviderOrchestrator;
    private learningSystem: AdaptiveLearningSystem;

    constructor() {
      this.contextProcessor = new ContextualProcessor();
      this.providerOrchestrator = new ProviderOrchestrator();
      this.learningSystem = new AdaptiveLearningSystem();
    }

    public async processInteraction(context: IDEContext): Promise<InteractionResponse> {
      const enrichedContext = await this.contextProcessor.analyzeContext(context);
      const providerResponse = await this.providerOrchestrator.executeInteraction(enrichedContext);
      return this.learningSystem.synthesizeResponse(providerResponse, enrichedContext);
    }
  }

  export interface IDEContext {
    languageId: string;
    cursorPosition: CursorPosition;
    visibleContent: string;
    projectContext: ProjectMetadata;
  }

  export interface InteractionResponse {
    suggestions: CompletionSuggestion[];
    contextualInsights: ContextualInsight[];
    performanceMetrics: PerformanceMetrics;
  }
}