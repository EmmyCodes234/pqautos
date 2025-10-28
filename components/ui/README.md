# Shadcn UI Components

This directory contains components following the shadcn UI pattern for easy reuse and consistency.

## Structure

- `components/ui/` - Shadcn-style components
- Each component is self-contained with its own file
- Components use Tailwind CSS for styling
- TypeScript types are defined for all props

## Available Components

### Footer7
A modern footer component with:
- Logo and company information
- Multiple link sections
- Social media integration
- Copyright and legal links

## Installation

To use these components, you need to install the required dependencies:

```bash
npm install react-icons
```

## Usage

Import components directly from the ui directory:

```tsx
import { Footer7 } from "@/components/ui/footer-7";

const MyComponent = () => {
  return <Footer7 />;
};
```

## Customization

All components accept props for customization. Check the TypeScript interfaces for available options.

## Adding New Components

To add a new shadcn-style component:

1. Create the component file in this directory
2. Follow the naming convention `component-name.tsx`
3. Export the component as a named export
4. Include TypeScript types for all props
5. Use Tailwind CSS for styling