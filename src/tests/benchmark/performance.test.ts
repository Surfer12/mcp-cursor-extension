namespace MCPCursorExtension.Tests {
  describe('Performance Benchmarks', () => {
    let graph: AdvancedKnowledgeGraph;

    beforeEach(() => {
      graph = new AdvancedKnowledgeGraph();
    });

    describe('Pattern Integration Performance', () => {
      it('should maintain sub-linear growth with pattern count', async () => {
        const sizes = [100, 1000, 10000];
        const times: number[] = [];

        for (const size of sizes) {
          const patterns = generateLargePatternSet(size);
          const startTime = Date.now();
          await graph.integratePatterns(patterns);
          times.push(Date.now() - startTime);
        }

        // Verify sub-linear growth
        const ratio1 = times[1] / times[0];
        const ratio2 = times[2] / times[1];
        expect(ratio2).toBeLessThan(ratio1);
      });
    });

    describe('Memory Usage Patterns', () => {
      it('should maintain efficient memory utilization', async () => {
        const memorySnapshots: number[] = [];
        const patterns = generateLargePatternSet(5000);

        // Take memory snapshots during pattern integration
        for (let i = 0; i < patterns.length; i += 1000) {
          await graph.integratePatterns(patterns.slice(i, i + 1000));
          memorySnapshots.push(process.memoryUsage().heapUsed);
        }

        // Verify memory growth is not exponential
        for (let i = 1; i < memorySnapshots.length - 1; i++) {
          const growth1 = memorySnapshots[i] - memorySnapshots[i-1];
          const growth2 = memorySnapshots[i+1] - memorySnapshots[i];
          expect(growth2).toBeLessThanOrEqual(growth1 * 1.1);
        }
      });
    });

    describe('Cognitive Load Processing', () => {
      it('should efficiently process varying cognitive loads', async () => {
        const loads = [0.2, 0.5, 0.8]; // Different cognitive load levels
        const processingTimes: number[] = [];

        for (const load of loads) {
          const patterns = generatePatternsWithCognitiveLoad(1000, load);
          const startTime = Date.now();
          await graph.integratePatterns(patterns);
          processingTimes.push(Date.now() - startTime);
        }

        // Verify processing time scales reasonably with cognitive load
        expect(Math.max(...processingTimes) / Math.min(...processingTimes)).toBeLessThan(2);
      });
    });
  });

  // Test Utilities
  function generateLargePatternSet(size: number): string[] {
    const patternTypes = ['TEMPORAL', 'SEMANTIC', 'BEHAVIORAL'];
    const patterns: string[] = [];

    for (let i = 0; i < size; i++) {
      const type = patternTypes[i % patternTypes.length];
      const category = generateCategory(type);
      const confidence = Math.random().toFixed(2);
      const score = Math.random().toFixed(2);

      patterns.push(`${type}:${category}:${confidence}:${score}`);
    }

    return patterns;
  }

  function generatePatternsWithCognitiveLoad(size: number, load: number): string[] {
    const patterns: string[] = [];
    const baseCategories = ['focus', 'comprehension', 'synthesis', 'application'];

    for (let i = 0; i < size; i++) {
      const category = baseCategories[i % baseCategories.length];
      const confidence = (Math.random() * 0.2 + 0.8).toFixed(2); // High confidence range
      const adjustedLoad = (load * (0.9 + Math.random() * 0.2)).toFixed(2); // Slight variation

      patterns.push(`BEHAVIORAL:${category}:${confidence}:${adjustedLoad}`);
    }

    return patterns;
  }

  function generateCategory(type: string): string {
    const categories = {
      TEMPORAL: ['coding', 'debugging', 'refactoring', 'testing', 'planning'],
      SEMANTIC: ['function', 'class', 'module', 'pattern', 'algorithm'],
      BEHAVIORAL: ['focus', 'flow', 'comprehension', 'analysis', 'synthesis']
    };

    const typeCategories = categories[type as keyof typeof categories];
    return typeCategories[Math.floor(Math.random() * typeCategories.length)];
  }

  interface TestNode {
    coordinates: { x: number; y: number };
    metadata: Record<string, any>;
  }

  function createTestNode(id: string, coordinates: { x: number; y: number }): EnhancedGraphNode {
    return {
      id,
      type: 'temporal',
      weight: 1.0,
      temporal: {
        creationTime: Date.now(),
        lastAccessed: Date.now(),
        accessCount: 1,
        relevanceScore: 1.0
      },
      cluster: {
        centroidDistance: 0,
        clusterDensity: 1,
        interClusterDistance: Infinity
      },
      cognitiveLoad: 0.5,
      metadata: {
        coordinates,
        category: 'test'
      }
    };
  }

  function createTestNodes(): Map<string, EnhancedGraphNode> {
    const nodes = new Map<string, EnhancedGraphNode>();
    
    // Create cluster 1
    nodes.set('node1', createTestNode('node1', { x: 0, y: 0 }));
    nodes.set('node2', createTestNode('node2', { x: 0.1, y: 0.1 }));
    nodes.set('node3', createTestNode('node3', { x: 0.2, y: 0.2 }));

    // Create cluster 2
    nodes.set('node4', createTestNode('node4', { x: 5, y: 5 }));
    nodes.set('node5', createTestNode('node5', { x: 5.1, y: 5.1 }));
    nodes.set('node6', createTestNode('node6', { x: 5.2, y: 5.2 }));

    return nodes;
  }
}