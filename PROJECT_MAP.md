# Project Map

## Core Architecture

### Application Structure

- `app/` - Next.js 14 App Router structure
  - `consults/` - Consultation-related pages and components
  - `proposals/` - Proposal management pages and components
  - `types/` - TypeScript type definitions
  - `utils/` - Utility functions and helpers
  - `contents/` - Content management components
  - `components/` - App-specific components
  - `data/` - Data management and storage
  - `layout.tsx` - Root layout component
  - `page.tsx` - Home page
  - `globals.css` - Global styles

### Component Organization

- `components/` - Shared component library
  - `ui/` - Reusable UI components using shadcn/ui
    - `button.tsx` - Button component
    - `card.tsx` - Card component
    - `input.tsx` - Input component
    - `textarea.tsx` - Textarea component
    - `toast.tsx` - Toast notifications
    - `toaster.tsx` - Toast container

### Core Libraries

- `lib/` - Core application libraries
  - `anthropic.ts` - Anthropic API integration
  - `types.ts` - Shared type definitions
  - `utils.ts` - Utility functions

## Key Workflows

### 1. Proposal Generation Flow

- User input collection through UI components
- Data processing via `lib/utils.ts`
- AI integration through `lib/anthropic.ts`
- State management using React hooks
- Toast notifications for user feedback

### 2. Content Management

- Content organization in `app/contents/`
- Type definitions in `app/types/`
- Data persistence in `app/data/`

## Code Conventions

### Component Structure

- Components follow atomic design principles
- UI components are built using shadcn/ui as the foundation
- Each component is self-contained with its own styles and types
- Components use TypeScript for type safety

### State Management

- React hooks for local state management
- Server components where possible for better performance
- Client components marked with 'use client' directive

### Error Handling

- Toast notifications for user feedback
- TypeScript for compile-time error prevention
- Error boundaries for runtime error handling

### Styling Conventions

- Tailwind CSS for utility-first styling
- shadcn/ui components for consistent design system
- Global styles in `app/globals.css`

## Development Workflows

### Adding New Features

1. Create new route in `app/` directory
2. Add necessary components in `components/ui/`
3. Define types in `app/types/`
4. Implement business logic in `lib/`
5. Add utility functions in `app/utils/`

### Component Development

1. Use shadcn/ui as base components
2. Extend with custom styling using Tailwind
3. Add TypeScript interfaces for props
4. Implement error handling and loading states
5. Add toast notifications for user feedback

### Testing

- Unit tests for utility functions
- Component tests for UI elements
- Integration tests for key workflows

## Project Dependencies

- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- shadcn/ui for component library
- Lucide React for icons
- Anthropic API for AI integration

## Best Practices

1. Keep components small and focused
2. Use TypeScript strictly
3. Follow atomic design principles
4. Implement proper error handling
5. Maintain consistent naming conventions
6. Document complex functions and components
7. Use proper Git commit messages
