import { Component } from '@angular/core';

interface ASTNode {
  id: string;
  name: string;
  type: string;
  tokenCount: number;
  complexityContribution: string;
  codeSnippet: string;
  description: string;
}

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  // DevLens State
  activeAstNodeId = 'func';
  devLensView: 'issue' | 'fix' = 'issue';

  astNodes: Record<string, ASTNode> = {
    program: {
      id: 'program',
      name: 'Program',
      type: 'SourceType: module',
      tokenCount: 42,
      complexityContribution: 'Root Container (0)',
      codeSnippet: `// Root AST Container\nimport { analyzeModule } from './core';\nexport function auditPipeline() { ... }`,
      description: 'Top-level Program container declaring strict ES module scope, imports, and top-level statement bindings.'
    },
    func: {
      id: 'func',
      name: 'FunctionDeclaration: auditPipeline',
      type: 'Identifier: auditPipeline (async: true)',
      tokenCount: 28,
      complexityContribution: '+2 Cyclomatic Branches',
      codeSnippet: `async function auditPipeline(sources: SourceFile[]): Promise<AuditReport> {\n  const results = [];\n  for (const src of sources) {\n    results.push(await evaluateAST(src));\n  }\n  return synthesizeReport(results);\n}`,
      description: 'Asynchronous declaration managing parallel AST traversals. Requires careful exception handling and visitor isolation.'
    },
    call: {
      id: 'call',
      name: 'CallExpression: evaluateAST',
      type: 'Callee: evaluateAST (arguments: 1)',
      tokenCount: 14,
      complexityContribution: '+1 Async Dependency',
      codeSnippet: `await evaluateAST(src, {\n  ecmaVersion: 2024,\n  sourceType: 'module',\n  plugins: ['typescript', 'jsx']\n});`,
      description: 'Lexical parsing invocation invoking Babel Parser with configurable syntax dialect plugins and token caching.'
    },
    return: {
      id: 'return',
      name: 'ReturnStatement',
      type: 'Argument: synthesizeReport(results)',
      tokenCount: 6,
      complexityContribution: 'Exit Point (1)',
      codeSnippet: `return synthesizeReport({\n  metrics: computedMetrics,\n  smells: detectedSmells,\n  astDigest: hashAST(program)\n});`,
      description: 'Synthesizes aggregated complexity indices, lint violations, and AI diagnostic recommendations into an immutable report schema.'
    }
  };

  // ILS State
  ilsRole: 'learner' | 'admin' = 'learner';
  ilsStep = 'sandbox';

  // EMCAD State
  emcadModel: 'svm' | 'logreg' = 'svm';

  selectAstNode(nodeId: string) {
    this.activeAstNodeId = nodeId;
  }

  get activeAstNode(): ASTNode {
    return this.astNodes[this.activeAstNodeId] || this.astNodes['func'];
  }

  setDevLensView(view: 'issue' | 'fix') {
    this.devLensView = view;
  }

  setIlsRole(role: 'learner' | 'admin') {
    this.ilsRole = role;
  }

  setIlsStep(step: string) {
    this.ilsStep = step;
  }

  setEmcadModel(model: 'svm' | 'logreg') {
    this.emcadModel = model;
  }
}
