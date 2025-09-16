# React Storybook


## Why Storybook?

Storybook is a crucial tool in modern web development that provides significant benefits:

1. **Component-Driven Development**
   - Isolate and test components independently
   - Faster development cycles with instant visual feedback
   - Consistent component behavior across applications

2. **Documentation & Collaboration**
   - Living, interactive component documentation
   - Clear usage examples for developers and designers

3. **Quality Assurance**
   - Accessibility testing out of the box
   - Interaction testing in isolation
   - Cross-browser compatibility verification

4. **Design System Management**
   - Single source of truth for UI components
   - Streamlined design-to-development workflow

5. **Business Value**
   - Reduced development time and costs
   - Improved product quality and consistency

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16.14.0 or higher recommended)
- npm (v8.0.0 or higher) or yarn (v1.22.0 or higher)
- Git (v2.30.0 or higher)

To verify your installations:
```bash
node --version
npm --version  # or yarn --version
git --version
```

### Installation

1. Clone the repository:
```bash
# Using HTTPS
git clone https://github.com/Abhinav21031995/react-storybook.git

# Navigate to project directory
cd storybook-demo
```

2. Install dependencies:
# Using npm
npm install

```

3. Set up environment:
```bash
# Copy environment template
cp .env.example .env

# Install peer dependencies
npm install react@^18.2.0 react-dom@^18.2.0 --save-peer
```

4. Verify installation:
```bash
# Should start Storybook development server
npm run storybook

## Project Overview

Our component library is built with:

- React + TypeScript for type-safe development
- Module Federation for micro-frontend architecture
- CSS Modules with SASS for scoped styling
- Storybook for interactive documentation
- Comprehensive theming system with CSS variables
- Webpack 5 for modern build optimization

### Project Structure

```
storybook-demo/
├── src/
│   ├── components/          # Component implementation files
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Checkbox/
│   │   ├── DatePicker/
│   │   └── ...
│   └── stories/            # Storybook documentation
│       └── components/     
├── .storybook/            # Storybook configuration
└── webpack.config.js      # Module Federation setup
```

### Styling System

Our library implements a comprehensive styling system:

```scss
// Color System using CSS variables
:root {
  --color-primary: #00aed9;
  --color-secondary: #1e22aa;
  --color-warning: #ff9e1b;
  --color-error: #ba1a1a;
  --color-success: #43b02a;
}

// Typography System
html {
  font-family: 'Proxima Nova', calibri, sans-serif;
}

h1 { font-size: 24px; line-height: 30px; }
h2 { font-size: 20px; line-height: 26px; }
h3 { font-size: 18px; line-height: 24px; }
```

## Available Components

Our component library includes the following reusable components:

1. **Button**
   - Primary, secondary, and outline variants
   - Support for icons and loading states
   - Configurable sizes: small, medium, large

2. **Card**
   - Basic card layout with header, content, and footer
   - Support for media content
   - Elevation variants

3. **DatePicker**
   - Custom calendar interface
   - Range selection support
   - Localization ready

4. **Select**
   - Single and multi-select options
   - Custom rendering support
   - Search/filter functionality

5. **Tabs**
   - Horizontal and vertical layouts
   - Dynamic tab generation
   - Custom tab headers

6. **Others**
   - Checkbox
   - Radio Button
   - Progress Spinner
   - Tooltip
   - Expansion Panel

## Core Configurations

### Webpack Configuration

Our webpack setup (`webpack.config.js`) includes:

```javascript
module.exports = {
  // Module Federation configuration
  plugins: [
    new ModuleFederationPlugin({
      name: 'storybook_components',
      filename: 'remoteEntry.js',
      exposes: {
        './components': './src/components'
      },
      shared: ['react', 'react-dom']
    })
  ],
  // Style handling
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader'
      }
    ]
  }
};
```

### Storybook Configuration

Key configuration files in `.storybook/`:

```javascript
// main.js - Core configuration
module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react',
  typescript: { reactDocgen: 'react-docgen-typescript' }
};

// preview.js - Story defaults and global decorators
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  layout: 'centered'
};

// manager.js - UI customization
addons.setConfig({
  theme: themes.dark,
  showNav: true,
  showPanel: true
});
```

## Setting Up Storybook

Storybook is already configured in this project. To start it locally: npm run storybook

This will launch Storybook on http://localhost:6006 (Locally)

## Creating Stories

Stories are located in the `src/stories` directory. Each component has its own story file

### Story Structure
- Place stories next to their components
- Use Component Story Format (CSF)
- Include different variants and states
- Add documentation using docblocks

## Using Storybook Addons

This project includes several Storybook addons:

- **@storybook/addon-essentials**: Core addons for docs, controls, actions, etc.
- **@storybook/addon-interactions**: Test component interactions
- **@storybook/addon-a11y**: Accessibility testing
- **@storybook/addon-viewport**: Responsive design testing

## Customizing Storybook

### Configuration Files
- `.storybook/main.js`: Core configuration and addons
- `.storybook/preview.js`: Global decorators and parameters
- `.storybook/manager.js`: UI customization`

### GitHub Actions Integration

```yaml
name: Storybook Tests
on: push
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm run test-storybook
```

## Best Practices

1. **Component Documentation**
   - Write detailed component descriptions
   - Include usage examples
   - Document props and their types
   - Add notes about accessibility

2. **Story Organization**
   - Group related components
   - Use consistent naming conventions
   - Include edge cases and error states

3. **Maintenance**
   - Keep stories in sync with components
   - Update documentation when props change
   - Review and test stories regularly
   - Remove obsolete stories

## Contributing

### Adding New Components

1. Create component directory:
   ```bash
   src/components/[ComponentName]/
   ```

2. Add implementation files:
   - `[ComponentName].tsx` - Component implementation
   - `[ComponentName].css` - Scoped styles
   - `[ComponentName].stories.tsx` - Storybook documentation

3. Development Guidelines:
   - Use TypeScript for type safety
   - Implement CSS modules for styling
   - Add comprehensive props documentation
   - Include usage examples in stories

4. Testing & Review:
   - Write unit tests
   - Test in Storybook
   - Create pull request
   - Address review feedback

### Code Standards

- Use TypeScript for all new components
- Follow established naming conventions
- Maintain comprehensive documentation
- Ensure accessibility compliance
- Add proper type definitions

## Scripts

```bash
# Start Storybook development server
npm run storybook

# Build static Storybook site
npm run build-storybook

# Run Storybook tests
npm run test-storybook

## Resources

- [Storybook Documentation](https://storybook.js.org/docs)
- [Component Story Format](https://storybook.js.org/docs/react/api/csf)
- [Addons](https://storybook.js.org/addons)
- [Writing Stories](https://storybook.js.org/docs/react/writing-stories/introduction)