async function partial_load(slot) {
  try {
    const res = await fetch(slot.dataset.partial);
    slot.innerHTML = res.ok ? await res.text() : "";
  } catch (err) {
    console.error(`Failed to load partial ${slot.dataset.partial}:`, err);
    slot.innerHTML = "";
  }
}

export async function partials_load() {
  const slots = document.querySelectorAll("[data-partial]");
  await Promise.all([...slots].map(partial_load));
}
