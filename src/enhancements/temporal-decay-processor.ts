namespace MCPCursorExtension {
  export class TemporalDecayProcessor {
    private readonly HALF_LIFE = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    private readonly DECAY_RATE = Math.log(2) / this.HALF_LIFE;

    public calculateDecay(metrics: TemporalMetrics, currentTime: number): TemporalMetrics {
      const timeDelta = currentTime - metrics.lastAccessed;
      const decayFactor = Math.exp(-this.DECAY_RATE * timeDelta);
      
      return {
        ...metrics,
        lastAccessed: currentTime,
        relevanceScore: metrics.relevanceScore * decayFactor
      };
    }

    public calculateRelevanceBoost(accessCount: number): number {
      // Implement sigmoid-based relevance boost
      return 1 / (1 + Math.exp(-accessCount / 10));
    }
  }
}