# Next.js Productos App

This project is a Next.js application that visually represents data from a "productos" table. It includes a Line Chart for the average product value by category and a Pie Chart for the quantity of products by brand.

## Project Structure

```
nextjs-productos-app
├── src
│   ├── app
│   │   ├── layout.tsx          # Root layout of the application
│   │   ├── page.tsx            # Main entry point rendering charts
│   │   ├── globals.css          # Global CSS styles
│   │   └── charts
│   │       ├── LineChart.tsx    # Line Chart component for average product value
│   │       └── PieChart.tsx     # Pie Chart component for product quantity by brand
│   ├── lib
│   │   └── db.ts                # Database connection logic
│   ├── services
│   │   └── productosService.ts   # Business logic for product data
│   ├── types
│   │   └── producto.ts           # TypeScript interfaces for product data
│   └── api
│       └── productos
│           ├── route.ts         # API route for fetching product data
│           └── [action].ts      # Dynamic API actions for products
├── public                        # Static assets (images, icons, etc.)
├── package.json                  # npm configuration and dependencies
├── tsconfig.json                 # TypeScript configuration
├── next.config.ts                # Next.js configuration
├── next-env.d.ts                 # TypeScript definitions for Next.js
├── eslint.config.mjs             # ESLint configuration
└── README.md                     # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd nextjs-productos-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## Usage

- The application will display a Line Chart representing the average product value by category and a Pie Chart showing the quantity of products by brand.
- You can modify the product data in the database to see real-time updates in the charts.

## Technologies Used

- Next.js
- React
- TypeScript
- Chart.js
- Tailwind CSS

## License

This project is licensed under the MIT License.