# Import necessary libraries
import pandas as pd

# Load the Excel file and read the "Orders" sheet
file_path = '/mnt/data/SuperStoreUS-2015 1.xlsx'
orders_data = pd.read_excel(file_path, sheet_name='Orders')

# Step 1: Dataset Overview
print("Dataset Overview:")
print(f"Total Rows: {orders_data.shape[0]}")
print(f"Total Columns: {orders_data.shape[1]}")
print(f"Columns with Missing Values:\n{orders_data.isnull().sum()}\n")

# Step 2: Summary Statistics for Numerical Columns
numerical_summary = orders_data.describe()
print("Summary Statistics (Numerical Data):")
print(numerical_summary)

# Highlight key statistics
print("\nKey Statistics:")
print(f"Discount: Ranges from {orders_data['Discount'].min()} to {orders_data['Discount'].max()} (Mean: {orders_data['Discount'].mean()})")
print(f"Unit Price: Ranges from {orders_data['Unit Price'].min()} to {orders_data['Unit Price'].max()} (Mean: {orders_data['Unit Price'].mean()})")
print(f"Profit: Ranges from {orders_data['Profit'].min()} to {orders_data['Profit'].max()} (Mean: {orders_data['Profit'].mean()})")
print(f"Sales: Ranges from {orders_data['Sales'].min()} to {orders_data['Sales'].max()} (Mean: {orders_data['Sales'].mean()})")
print(f"Quantity ordered new: Ranges from {orders_data['Quantity ordered new'].min()} to {orders_data['Quantity ordered new'].max()} (Mean: {orders_data['Quantity ordered new'].mean()})\n")

# Step 3: Handling Missing Values
print("Handling Missing Values:")
missing_values = orders_data.isnull().sum()
if missing_values.any():
    print(f"Missing values detected:\n{missing_values}\n")
    # Example of filling missing values with mean (optional)
    orders_data['Product Base Margin'].fillna(orders_data['Product Base Margin'].mean(), inplace=True)
    print("Missing values in 'Product Base Margin' column filled with the mean.")
else:
    print("No missing values detected.\n")

# Step 4: Descriptive Analysis
print("Descriptive Analysis:")
overall_metrics = {
    "Total Sales": orders_data["Sales"].sum(),
    "Total Profit": orders_data["Profit"].sum(),
    "Average Discount": orders_data["Discount"].mean(),
    "Average Sales": orders_data["Sales"].mean(),
    "Average Profit": orders_data["Profit"].mean(),
    "Total Orders": len(orders_data),
}
print(overall_metrics)

# Breakdown by Product Category
category_metrics = orders_data.groupby("Product Category").agg(
    Total_Sales=("Sales", "sum"),
    Average_Sales=("Sales", "mean"),
    Total_Profit=("Profit", "sum"),
    Average_Profit=("Profit", "mean"),
    Average_Discount=("Discount", "mean"),
    Total_Orders=("Order ID", "count"),
).sort_values(by="Total_Sales", ascending=False)
print("\nMetrics by Product Category:")
print(category_metrics)

# Step 5: Time-Series Analysis
orders_data['Order Date'] = pd.to_datetime(orders_data['Order Date'])
time_series_sales = orders_data.groupby(orders_data['Order Date'].dt.to_period("M")).agg(
    Total_Sales=("Sales", "sum"),
    Total_Profit=("Profit", "sum")
)
print("\nMonthly Sales and Profit Trends:")
print(time_series_sales)

# Step 6: Top Products and Customers
top_products = orders_data.groupby("Product Name").agg(
    Total_Sales=("Sales", "sum"),
    Total_Profit=("Profit", "sum")
).sort_values(by="Total_Sales", ascending=False).head(10)

top_customers = orders_data.groupby("Customer Name").agg(
    Total_Sales=("Sales", "sum"),
    Total_Profit=("Profit", "sum")
).sort_values(by="Total_Sales", ascending=False).head(10)

print("\nTop 10 Products by Sales:")
print(top_products)

print("\nTop 10 Customers by Sales:")
print(top_customers)
