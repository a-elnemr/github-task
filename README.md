

## React Native Task Readme

This readme file provides an overview of the React Native task completed 

### Project Structure

The project consists of the following folders:

- `screens`: Contains the main screens of the application.
- `components`: Contains reusable components.
- `components/shared`: Contains shared components used across the screens.

### Code Readability and Performance

During the development of this project, particular emphasis was placed on ensuring code readability and optimizing performance.

To enhance code readability, a custom "Use Logic" hook was implemented to separate the business logic from the components. This approach helps maintain a clean and organized codebase.

In terms of performance, one of the primary features implemented was an infinite scroll. While there are various ways to achieve infinite scroll, the project utilizes a manual approach instead of relying on out-of-the-box solutions such as Redux Toolkit Query or React Query. The purpose of this decision was to demonstrate a strong understanding of React's lifecycle.

The manual infinite list approach involves fetching data when the end of the list is reached and storing it in a state variable. Although this approach is optimized through the use of flat list virtualization, it may result in excessive data being stored in memory if the user scrolls extensively. In production, it is recommended to use a caching mechanism, such as the ones provided by the aforementioned libraries, for improved memory management.

### Understanding the Infinite List Logic

The manual infinite list implementation consists of three "brains" and helper functions. The three "brains" are represented by the three `useFocusEffect` functions found in the `useLogic` hook. One brain listens to page changes, while the other two listen to filter changes—one for the Explore page and the other for the Repo page.

Here's a high-level explanation of how the logic works:

1. The page can be in one of three states: "Loading," "Stable," or "Error" (typically due to GitHub's strict rate limiting).
2. To transition from the "Stable" state to either "Loading" or "Error," the page number needs to be incremented. Therefore, the page number becomes a critical factor in the logic.
3. The main brain listens to page changes, while the sub-brains listen to filter changes. For instance, one sub-brain listens to filter changes on the Explore page, while the other listens to filter changes on the Repo page.
4. When the user first renders a page (e.g., the Explore page), all three `useFocusEffect` functions are rendered. However, only the main brain works initially, as the other two sub-brains are protected by a `firstLoad` state that detects if the page is first loaded.
5. The main brain's primary task is to fetch data by calling the `fetchData()` function. On the first load, the data is fetched, transitioning the state to "Stable."
6. As the user scrolls down to the end of the list, the desire to fetch new data arises. The only way to fetch data is by calling the main brain, which increments the page number by one and triggers a data fetch via `fetchData()`.
7. To apply filters and view new filtered data, a reset is necessary. This reset involves:
   - Resetting loading states
   - Resetting error state
   - Emptying the data array in the state
   - Reinitializing the page number
8. To fetch new data with the applied filters, the main brain needs to be called again, this time with the page number set to 1. This ensures that data is fetched for the first page.
9. If the user had scrolled two pages before setting the filter, resetting the pages works flawlessly. However, if the user is on the first page and wants to apply a filter, simply resetting the page number to 1 won't trigger a rerender since numbers are immutable. To overcome this, the page is set to 0, and the main brain handles the reset by checking if the page is 0 and changing it to 1 to trigger a rerender.
10. The logic also includes a `handleReset` function, which has two types: partial and full. The partial reset is used after completing a fetch request, while the full reset empties the current state and fetches the data again. The handleReset function is called in two instances: when the user refreshes the page and when a filter is applied through the sub-brains.
11. Finally, the `handlePage` function is responsible for incrementing the page number. However, handling page increments requires some additional considerations. For example, if a user reaches the end of a page, the data starts fetching, and a loading state is displayed. If the user then scrolls up and down again, the page number increments, leading to inconsistent behavior. The same issue arises if the page is initially empty, as there is no list, yet the user is considered to have reached the end. To address these scenarios, the `handlePage` function was carefully implemented.

### Conclusion

Thank you for taking the time to read this overview of the implemented logic. I acknowledge that I still have much to learn, and I am excited about the opportunity to work with you at Milango. I look forward to further enhancing my skills and contributing to your projects.