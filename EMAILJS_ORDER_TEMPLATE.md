# EmailJS Order Template Setup (orders@86partz.com)

Use this to create an **Email Template** in the EmailJS dashboard for receiving orders.

## 1. Service

- You already have a service with ID: **`service_xtrt6uf`**
- The **From email** (and sending address) is determined by the **EmailJS Service** (the email account you connected, e.g. Gmail). In the service settings you can set the **From name** that appears to recipients, or use the template variable **`{{from_name}}`** in the template’s “From name” field (see below).

## 2. From / To / Reply-To in the template

In your EmailJS **template** (the template editor has fields for these), set:

| Field | What to set | Notes |
|-------|-------------|--------|
| **To email** | `orders@86partz.com` or **`{{to_email}}`** | We send `to_email: 'orders@86partz.com'` so you can use **`{{to_email}}`** in the template, or type the address directly. |
| **From email** | **`{{from_email}}`** or service default | We send `from_email: 'orders@86partz.com'` (configurable in `emailjs-config.js` as `fromEmail`). Use **`{{from_email}}`** in the template if your EmailJS service allows overriding the sender address. Otherwise the From address comes from the **Service** (the connected account). |
| **From name** | **`{{from_name}}`** or a fixed name | We send `from_name: '86Partz Orders'` (configurable in `emailjs-config.js` as `fromName`). Use **`{{from_name}}`** in the template so the display name is correct. |
| **Reply to** | **`{{reply_to}}`** | We send `reply_to: customer_email`. Setting Reply-To to **`{{reply_to}}`** means when you hit “Reply” on the order email, the reply goes to the **customer**, not to your sending address. |

- **From email:** We send **`{{from_email}}`** (default orders@86partz.com; set **fromEmail** in emailjs-config.js to change it). If your template has a “From email” field, set it to **`{{from_email}}`**. Some EmailJS services use the connected account's address and ignore this; if so, the From address is set in the **Service** in the dashboard.
- **To email:** Set to **orders@86partz.com** (or **`{{to_email}}`**).
- **Reply to:** Set to **`{{reply_to}}`** so replies go to the customer.

## 3. Create a New Email Template

In EmailJS: **Email Templates** → **Add New Template**.

- **Name:** e.g. `Order Notification` or `86partz Order`
- **Subject:** e.g. `New order {{order_id}} – {{customer_name}}`
- In the template’s **To**, **From name**, and **Reply to** fields, use the values from the table in section 2 above.

## 4. Template Variables (use these exact names)

Set these **dynamic variables** in your template. The cart will send:

| Variable name           | Description                    | Example |
|-------------------------|--------------------------------|--------|
| `{{to_email}}`          | Recipient email                | orders@86partz.com |
| `{{from_name}}`         | “From” display name            | 86Partz Orders |
| `{{reply_to}}`          | Reply-To (customer email)      | customer@example.com |
| `{{order_id}}`          | Order ID                       | GTP-ABC123 |
| `{{order_date}}`        | Date/time of order             | 2/14/2025, 3:45:00 PM |
| `{{customer_name}}`     | Full name                      | John Doe |
| `{{customer_email}}`     | Email                          | john@example.com |
| `{{customer_phone}}`    | Phone                          | +1 555-123-4567 |
| `{{customer_address}}`  | Delivery address               | 123 Main St, City |
| `{{special_instructions}}` | Notes / delivery instructions | Leave at door |
| `{{payment_method}}`    | Preferred payment              | Zelle |
| `{{items_list}}`        | Plain text list of items       | (see below) |
| `{{subtotal}}`          | Subtotal (formatted)            | $299.00 |
| `{{total}}`             | Total (formatted)               | $299.00 |

**`items_list`** is sent as plain text, one line per item, e.g.:

```
Product A x2 @ $50.00 = $100.00
Product B x1 @ $199.00 = $199.00
```

## 5. HTML Body for the Email Template (no conditionals — avoids “corrupted dynamic variables”)

**Important:** Do not use `{{#if}}` or any Handlebars conditionals in the template. Use only simple `{{variable_name}}` (no spaces inside the braces). Paste the block below into the **Content** (HTML) of your EmailJS template, then **Save**.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Order</title>
</head>
<body style="font-family: Arial, sans-serif; color: #0a0f1a; margin: 0; padding: 0; background-color: #f5f5f5;">
  <div style="max-width: 600px; margin: 0 auto; padding: 24px; background-color: #ffffff;">
    <div style="font-size: 20px; font-weight: bold; color: #b80000; margin-bottom: 8px;">86Partz / GT86Partz</div>
    <div style="color: #6b7280; font-size: 14px; margin-bottom: 20px;">New order received from website</div>
    <h2 style="font-size: 18px; color: #111111; margin: 0 0 16px; border-bottom: 2px solid #b80000; padding-bottom: 8px;">Order {{order_id}}</h2>
    <div style="background-color: #f8fafc; border: 1px solid #e9eef7; border-radius: 8px; padding: 14px 16px; margin-bottom: 16px; font-size: 14px;">
      <p style="margin: 6px 0;"><strong>Date:</strong> {{order_date}}</p>
      <p style="margin: 6px 0;"><strong>Name:</strong> {{customer_name}}</p>
      <p style="margin: 6px 0;"><strong>Email:</strong> {{customer_email}}</p>
      <p style="margin: 6px 0;"><strong>Phone:</strong> {{customer_phone}}</p>
      <p style="margin: 6px 0;"><strong>Address:</strong> {{customer_address}}</p>
      <p style="margin: 6px 0;"><strong>Payment:</strong> {{payment_method}}</p>
      <p style="margin: 6px 0;"><strong>Instructions:</strong> {{special_instructions}}</p>
    </div>
    <h2 style="font-size: 18px; color: #111111; margin: 0 0 16px; border-bottom: 2px solid #b80000; padding-bottom: 8px;">Items</h2>
    <div style="background-color: #fafafa; border: 1px solid #e5e7eb; border-radius: 8px; padding: 14px; margin-bottom: 16px; font-size: 14px; white-space: pre-wrap;">{{items_list}}</div>
    <p style="font-size: 18px; font-weight: bold; color: #b80000; text-align: right; margin-top: 12px;">Subtotal: {{subtotal}} | Total: {{total}}</p>
    <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">Reply to {{customer_email}} to contact the customer.</div>
  </div>
</body>
</html>
```

- Every field uses a single `{{variable_name}}` with no spaces (e.g. `{{order_id}}` not `{{ order_id }}`).
- There are **no** `{{#if}}` or `{{#variable}}` blocks; the cart sends empty string for optional fields (e.g. `special_instructions`), so “Instructions:” may show with nothing after it — that is expected.

## 6. Set To / From name / Reply-To in the template

In the template editor, set:

- **To:** `orders@86partz.com` or **`{{to_email}}`**
- **From email:** **`{{from_email}}`** (if your template/service supports it; otherwise set in the Service)
- **From name:** **`{{from_name}}`** (so it shows “86Partz Orders” or whatever you set in `emailjs-config.js`)
- **Reply to:** **`{{reply_to}}`** (so replies go to the customer)

## 7. Get Template ID and Public Key

- After saving the template, copy its **Template ID** (e.g. `template_xyz123`).
- In EmailJS dashboard go to **Account** → **API Keys** and copy your **Public Key**.

Put them in **`emailjs-config.js`** (and optionally set `toEmail` / `fromName`):

```js
window.EMAILJS_ORDER_CONFIG = {
  serviceId: 'service_xtrt6uf',
  templateId: 'template_xxxxxxxxx',  // your template ID
  publicKey: 'xxxxxxxxxxxxxxxx',    // your public key
  toEmail: 'orders@86partz.com',    // recipient (optional; default above)
  fromEmail: 'orders@86partz.com',  // sender address (optional; use in template "From email" if supported)
  fromName: '86Partz Orders',       // optional; "From" display name
};
```

After that, every “Place Order” on the cart will send an email to orders@86partz.com via EmailJS, with Reply-To set to the customer so you can reply directly to them.

## Troubleshooting: "One or more dynamic variables are corrupted"

- **Use the template in section 5 exactly** — it has no `{{#if}}` or other conditionals; only simple `{{variable_name}}`.
- **No spaces in variable tags:** `{{order_id}}` not `{{ order_id }}`.
- In the EmailJS template editor, **replace the entire Content (HTML)** with the block from section 5, then **Save**.
- The cart already sanitizes all values sent; the error almost always comes from the template HTML in the EmailJS dashboard.
