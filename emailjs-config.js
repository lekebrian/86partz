// EmailJS configuration for order emails to orders@86partz.com
// 1. Get your Public Key from EmailJS: https://dashboard.emailjs.com/admin/account
// 2. Create a template and set its ID below (see EMAILJS_ORDER_TEMPLATE.md for HTML and variables)
window.EMAILJS_ORDER_CONFIG = {
  serviceId: 'service_xtrt6uf',
  templateId: 'template_7zm535n',
  publicKey: 'cGQL-VJm_U10wFXH9',
  toEmail: 'orders@86partz.com',    // Recipient (also sent as template var for template override)
  fromEmail: 'orders@86partz.com', // Sender address (if your template/service allows overriding)
  fromName: '86Partz Orders',      // Optional: "From" display name (if your template uses it)
};
