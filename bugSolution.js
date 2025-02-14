```javascript
import './styles.css'; // Import the CSS file

function MyComponent() {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <p className="text-xl font-bold">Some text</p>
    </div>
  );
}

export default MyComponent;
```
```css
/* styles.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```