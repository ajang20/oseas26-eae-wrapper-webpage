export async function partials_load() {
  const slots = document.querySelectorAll("[data-partial]");
  for (const slot of slots) {
    const res = await fetch(slot.dataset.partial);
    slot.innerHTML = res.ok ? await res.text() : "";
  }
}
