export default function WhatsAppButton() {
  const phone = "923304284284";
  const message =
    "Assalamu Alaikum. I would like to learn more about Islamtec Qur’an & Tajweed programs.";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 btn-primary"
      aria-label="Chat on WhatsApp"
    >
      <span className="text-sm font-medium hidden sm:inline">
        Chat on WhatsApp
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path d="M19.11 17.2c-.27-.14-1.59-.78-1.84-.87-.25-.09-.43-.14-.61.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.44-.46-.61-.46h-.52c-.18 0-.45.07-.68.34-.23.27-.9.88-.9 2.15 0 1.27.93 2.5 1.06 2.67.14.18 1.83 2.8 4.43 3.92.62.27 1.11.43 1.49.55.63.2 1.2.17 1.65.1.5-.07 1.59-.65 1.82-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
        <path d="M16 2.67c-7.36 0-13.33 5.97-13.33 13.33 0 2.35.62 4.65 1.8 6.68L2.67 29.33l6.82-1.78c1.97 1.07 4.18 1.64 6.51 1.64 7.36 0 13.33-5.97 13.33-13.33S23.36 2.67 16 2.67zm0 24.89c-2.08 0-4.13-.55-5.94-1.6l-.42-.25-4.05 1.06 1.08-3.95-.27-.41c-1.09-1.83-1.67-3.92-1.67-6.06 0-6.41 5.21-11.62 11.62-11.62S27.62 9.94 27.62 16.35 22.41 27.56 16 27.56z" />
      </svg>
    </a>
  );
}
