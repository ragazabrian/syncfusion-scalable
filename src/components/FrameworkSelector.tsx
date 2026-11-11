import React, { useState } from 'react';
import { Terminal, Check, Copy, Code, Layers, Sparkles, ExternalLink } from 'lucide-react';

export const FrameworkSelector: React.FC = () => {
  const [activeFw, setActiveFw] = useState<'blazor' | 'react' | 'angular' | 'maui' | 'flutter' | 'vue'>('blazor');
  const [copied, setCopied] = useState(false);

  const frameworks = {
    blazor: {
      name: 'Blazor',
      category: 'WebAssembly & Server',
      command: 'dotnet add package Syncfusion.Blazor.Grid',
      snippet: `<SfGrid DataSource="@Orders" AllowPaging="true" AllowSorting="true">\n    <GridColumns>\n        <GridColumn Field="OrderID" HeaderText="Order ID" Width="120" />\n        <GridColumn Field="CustomerName" HeaderText="Customer" Width="160" />\n        <GridColumn Field="OrderDate" HeaderText="Date" Format="d" Width="130" />\n        <GridColumn Field="Freight" HeaderText="Amount" Format="C2" Width="120" />\n    </GridColumns>\n</SfGrid>`,
      features: ['AOT compilation support', 'Zero JavaScript required', 'Native C# data-binding', 'WebAssembly & Server-side'],
      tag: 'Most Popular for .NET'
    },
    react: {
      name: 'React',
      category: 'React 19 & Next.js',
      command: 'npm install @syncfusion/ej2-react-grids',
      snippet: `import { GridComponent, ColumnsDirective, ColumnDirective, Page, Sort, Inject } from '@syncfusion/ej2-react-grids';\n\nexport const OrderGrid = ({ orders }) => (\n  <GridComponent dataSource={orders} allowPaging={true} allowSorting={true}>\n    <ColumnsDirective>\n      <ColumnDirective field="OrderID" headerText="Order ID" width="120" />\n      <ColumnDirective field="Customer" headerText="Client" width="150" />\n      <ColumnDirective field="Total" headerText="Volume" format="C2" />\n    </ColumnsDirective>\n    <Inject services={[Page, Sort]} />\n  </GridComponent>\n);`,
      features: ['React 19 Hooks & Server Actions', 'Tailwind & CSS Variables', 'Zero DOM thrashing', 'TypeScript strict definitions'],
      tag: 'Enterprise Web'
    },
    angular: {
      name: 'Angular',
      category: 'Angular 18+ Signals',
      command: 'npm install @syncfusion/ej2-angular-grids',
      snippet: `@Component({\n  selector: 'app-root',\n  template: \`\n    <ejs-grid [dataSource]='data' [allowPaging]='true' [allowSorting]='true'>\n      <e-columns>\n        <e-column field='OrderID' headerText='Order ID' width='120'></e-column>\n        <e-column field='CustomerName' headerText='Customer' width='150'></e-column>\n      </e-columns>\n    </ejs-grid>\n  \`\n})\nexport class AppComponent { public data = orderSignal(); }`,
      features: ['Zoneless change detection', 'Angular Signals integration', 'Lazy-loaded standalone components', 'Strict AOT compiling'],
      tag: 'Standardized Enterprise'
    },
    maui: {
      name: '.NET MAUI',
      category: 'Cross-Platform Mobile & Desktop',
      command: 'dotnet add package Syncfusion.Maui.DataGrid',
      snippet: `<syncfusion:SfDataGrid x:Name="dataGrid"\n                       ItemsSource="{Binding OrderDetails}"\n                       AutoGenerateColumnsMode="None">\n    <syncfusion:SfDataGrid.Columns>\n        <syncfusion:DataGridNumericColumn MappingName="OrderID" HeaderText="Order ID" />\n        <syncfusion:DataGridTextColumn MappingName="CustomerID" HeaderText="Customer" />\n    </syncfusion:SfDataGrid.Columns>\n</syncfusion:SfDataGrid>`,
      features: ['iOS, Android, macOS & Windows', 'Hardware-accelerated Skia graphics', 'Touch & mouse gesture support', 'Native OS styling'],
      tag: 'Microsoft Recommended'
    },
    flutter: {
      name: 'Flutter',
      category: 'Mobile, Web & Desktop',
      command: 'flutter pub add syncfusion_flutter_datagrid',
      snippet: `SfDataGrid(\n  source: orderDataSource,\n  columns: [\n    GridColumn(columnName: 'id', label: Text('Order ID')),\n    GridColumn(columnName: 'customer', label: Text('Customer')),\n    GridColumn(columnName: 'amount', label: Text('Total')),\n  ],\n);`,
      features: ['Fast 120Hz smooth scrolling', 'Sub-millisecond chart animations', 'Cross-platform single codebase', 'Null safety certified'],
      tag: 'High Velocity'
    },
    vue: {
      name: 'Vue.js',
      category: 'Vue 3 Composition API',
      command: 'npm install @syncfusion/ej2-vue-grids',
      snippet: `<template>\n  <ejs-grid :dataSource="orders" :allowPaging="true" :allowSorting="true">\n    <e-columns>\n      <e-column field="OrderID" headerText="Order ID" width="120" />\n      <e-column field="Customer" headerText="Customer" width="150" />\n    </e-columns>\n  </ejs-grid>\n</template>`,
      features: ['Vue 3 Composition API', 'Vite & Nuxt support', 'Reactive state integration', 'Single-file components'],
      tag: 'Lightweight & Reactive'
    },
  };

  const current = frameworks[activeFw];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="frameworks" className="py-24 border-t border-white/[0.06] bg-[#0c0c10]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-neonDim border border-brand-neon/20 text-xs text-brand-neon font-medium mb-4">
            <Code className="w-3.5 h-3.5" />
            <span>Cross-Platform Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Works with your stack. <span className="font-serif italic font-normal text-indigo-400">Pick your framework.</span>
          </h2>
          <p className="text-base sm:text-lg text-text-muted">
            The same high-performance component architecture, identical feature sets, and consistent styling tokens across every modern language.
          </p>
        </div>

        {/* Framework Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {(Object.keys(frameworks) as Array<keyof typeof frameworks>).map((key) => {
            const fw = frameworks[key];
            const isSelected = activeFw === key;
            return (
              <button
                key={key}
                onClick={() => setActiveFw(key)}
                className={`relative px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-brand-violet text-white shadow-[0_0_20px_rgba(99,105,255,0.4)]'
                    : 'bg-white/[0.04] text-text-muted hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
                }`}
              >
                {fw.name}
                {isSelected && (
                  <span className="absolute -top-2 -right-1 px-1.5 py-0.2 text-[9px] font-mono bg-brand-neon text-black rounded-full font-bold">
                    ACTIVE
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Framework Code & Details View */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#0f0f14] border border-white/10 p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">{current.name}</h3>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-brand-violet/20 text-brand-violet font-mono border border-brand-violet/30">
                  {current.tag}
                </span>
              </div>
              <p className="text-xs text-text-dim mt-0.5">{current.category}</p>
            </div>

            {/* Install Command with Copy Button */}
            <div className="flex items-center gap-2 p-1.5 pl-3 rounded-xl bg-black/60 border border-white/[0.08] font-mono text-xs w-full sm:w-auto">
              <span className="text-brand-neon">$</span>
              <span className="text-text-primary select-all overflow-x-auto">{current.command}</span>
              <button
                onClick={handleCopy}
                className="p-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-text-muted hover:text-white transition-colors ml-auto"
                title="Copy command"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-brand-neon" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Code Snippet Box */}
          <div className="mt-6 rounded-2xl bg-[#08080b] border border-white/[0.06] p-4 font-mono text-xs overflow-x-auto relative">
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/[0.06] text-text-dim text-[11px]">
              <span>Sample Implementation · {current.name}</span>
              <span className="text-brand-neon">Production Ready</span>
            </div>
            <pre className="text-white/90 leading-relaxed">
              <code>{current.snippet}</code>
            </pre>
          </div>

          {/* Feature Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-white/[0.08]">
            {current.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-text-muted">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-neon" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
