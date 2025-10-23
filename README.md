# GitHub Top Stars

A React Native application that allows users to explore and discover the most popular GitHub repositories. The app offers filtering capabilities by programming language and creation date, along with a toggle for switching between modern dark/light themes.

## Prerequisites

Before running the application, ensure you have the following installed:

- **Node.js**: Version 20 or higher
- **React Native CLI**: 0.82.0
- **iOS Development**: Xcode (for iOS development)
- **Android Development**: Android Studio with Android SDK (for Android development)
- **Package Manager**: Yarn (recommended) or npm

## How to Run

### 1. Install Dependencies

```bash
yarn install
```

### 2. iOS Setup (if running on iOS)

```bash
npx pod-install
```

### 3. Start the Application

**Run on Android:**

```bash
yarn android
```

**Run on iOS:**

```bash
yarn ios
```

## How to Use

### Explore Screen

- **View Popular Repositories**: Browse the most starred repositories on GitHub
- **Adjust View Count**: Use the dropdown to select how many repositories to display (10, 50, or 100)
- **Repository Information**: Each card shows:
  - Repository name and description
  - Star count and fork count
  - Programming language
  - Update date

### Repositories Screen

- **Filter by Language**:

  - Tap the "Language" Modal
  - Select from available programming languages or "Any"
  - The list will update automatically

- **Filter by Date**:

  - Tap the "Date" Modal
  - Select a creation date using the date picker
  - Only repositories created after this date will be shown

- **Combined Filters**: Use both language and date filters simultaneously for precise results

### Theme Toggle

- Use the theme toggle button in the header to switch between dark and light modes
- Your theme preference is automatically saved and restored on app restart

  
