/* ============================================================
   najm-tools.js — أدوات مشتركة لكل صفحات أكاديمية نَجم كود
   حاليًا: زرار عائم يفتح "المترجم التفاعلي" في تبويب جديد،
   فلا يفقد الطالب مكانه في الدرس أو الورشة.

   طريقة الاستخدام: أضف هذا السطر قبل </body> في أي صفحة:
       <script src="najm-tools.js"></script>
   (ويجب أن يكون الملف في نفس الفولدر مع بقية الصفحات)
   ============================================================ */
(function () {
  /* ✏️ إعدادات يمكنك تعديلها */
  var COMPILER_URL = 'https://onecompiler.com/python';
  var LABEL = 'جرّب الكود في المترجم';

  /* لا نعرض الزرار داخل صفحة المترجم نفسها */
  if (/python-compiler\.html$/i.test(location.pathname)) return;
  if (document.getElementById('najm-fab')) return;

  var css =
    '.najm-fab{position:fixed;left:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:9999;' +
    'display:flex;align-items:center;gap:8px;direction:rtl;text-decoration:none;color:#fff;' +
    "font:800 16px 'Cairo',Tahoma,sans-serif;padding:10px 18px;border-radius:40px;" +
    'background:linear-gradient(90deg,#4a3fd0,#7a52e0);box-shadow:0 6px 18px rgba(60,40,160,.4);' +
    'transition:transform .2s,filter .2s}' +
    '.najm-fab:hover,.najm-fab:focus-visible{transform:translateY(-2px);filter:brightness(1.1);outline:none}' +
    ".najm-fab-ic{font:500 17px 'Fira Code',monospace;direction:ltr}" +
    '@media(max-width:820px){.najm-fab{width:50px;height:50px;padding:0;justify-content:center;border-radius:50%}' +
    '.najm-fab-tx{display:none}}' +
    '@media print{.najm-fab{display:none}}';
  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

  var a = document.createElement('a');
  a.id = 'najm-fab';
  a.className = 'najm-fab';
  a.href = COMPILER_URL;
  a.target = '_blank';
  a.rel = 'noopener';
  a.title = LABEL;
  a.setAttribute('aria-label', LABEL + ' (يفتح في تبويب جديد)');
  a.innerHTML = '<span class="najm-fab-ic">&lt;/&gt;</span><span class="najm-fab-tx">' + LABEL + '</span>';
  document.body.appendChild(a);
})();
