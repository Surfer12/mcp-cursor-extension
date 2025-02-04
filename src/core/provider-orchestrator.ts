namespace MCPCursorExtension {
  export class ProviderOrchestrator {
    private providerRegistry: Map<string, ProviderConfig>;
    private securityManager: SecurityManager;
    private loadBalancer: LoadBalancer;

    constructor() {
      this.providerRegistry = new Map();
      this.securityManager = new SecurityManager();
      this.loadBalancer = new LoadBalancer();
    }

    public async executeInteraction(context: EnrichedContext): Promise<ProviderResponse> {
      const selectedProvider = this.loadBalancer.selectOptimalProvider(context);
      const secureConfig = await this.securityManager.getSecureConfig(selectedProvider);

      try {
        const response = await this.executeProviderRequest(secureConfig, context);
        this.loadBalancer.recordInteractionMetrics(selectedProvider, response.metrics);
        return response;
      } catch (error) {
        return this.handleProviderError(error, context);
      }
    }

    private async executeProviderRequest(
      config: SecureProviderConfig,
      context: EnrichedContext
    ): Promise<ProviderResponse> {
      const provider = await this.initializeProvider(config);
      return provider.streamResponse(context);
    }
  }
}