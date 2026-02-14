# Updating the Smartsupp Live Chat Account

The site currently uses one Smartsupp key on all pages. To switch to a **new Smartsupp account**, use either Option A (recommended) or Option B.

---

## Option A: Use the central loader (recommended)

1. **Get your new snippet** from the new Smartsupp dashboard (Installation / Chat widget code).
2. **Replace the contents** of **`smartsupp-loader.js`** with the new snippet’s **JavaScript only** (no `<script>` tags):
   - Leave the file as a single script that sets `_smartsupp` and loads the Smartsupp loader.
   - If the new snippet only gives you a key, replace the line  
     `_smartsupp.key = '80d6418a3edc2522ab8492740e0780e8f05f1e13';`  
     with  
     `_smartsupp.key = 'YOUR_NEW_KEY';`
3. **Ensure every page that should show the chat** includes this script in `<head>`:
   ```html
   <script src="smartsupp-loader.js"></script>
   ```
   Pages that already use the loader are listed below under “Pages using central loader” once you’ve switched them.

---

## Option B: Replace the snippet in each HTML file

If you prefer to keep the snippet inline in each page, replace the **entire Smartsupp script block** in each of these files with your new snippet:

| File | Location in file |
|------|-------------------|
| `index.html` | `<head>`, after stylesheets |
| `cart.html` | `<head>`, after stylesheets |
| `contact.html` | `<head>` |
| `general.html` | `<head>` |
| `reviews.html` | `<head>` |
| `engine-drivetrain.html` | `<head>` |
| `suspension-handling.html` | `<head>` |
| `brakes-wheels.html` | `<head>` |
| `exterior-aerodynamics.html` | `<head>` |
| `interior-electronics.html` | `<head>` |
| `lighting-electrical.html` | `<head>` |
| `accessories.html` | `<head>` |

**What to replace:** the block that looks like this (including the key and the loader):

```html
<script type="text/javascript">
var _smartsupp = _smartsupp || {};
_smartsupp.key = '80d6418a3edc2522ab8492740e0780e8f05f1e13';
window.smartsupp||(function(d) {
  var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
  s=d.getElementsByTagName('script')[0];c=d.createElement('script');
  c.type='text/javascript';c.charset='utf-8';c.async=true;
  c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
})(document);
</script>
```

Paste your **new** snippet (with your new key) in place of this block in each file.

---

## Place order and Smartsupp

When a customer clicks **Place Order** on the cart:

1. The order is sent to **EmailJS** (to orders@86partz.com).
2. The same order is sent to **Smartsupp** (visitor name/email/phone, chat variables, and an order summary message).

So both the new email and the live chat (with the account you configure above) will receive the order. After you switch to the new Smartsupp account, no code changes are needed for place order; only the key/snippet needs to be updated as above.

---

## What to send for Option A

If you want to use the central loader (Option A), you can send:

1. The **new Smartsupp key** (long string from the new account), **or**
2. The **full script** from the new Smartsupp dashboard (the JS inside the `<script>...</script>` block).

Then `smartsupp-loader.js` can be updated once and all pages that load it will use the new account.
