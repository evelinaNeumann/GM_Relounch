<template>
  <section id="career" class="section section--alt section--flush business-contact">
    <div class="section__header">
      <h2 class="section__title">Kontakt</h2>
      <p class="section__subtitle">Schreiben Sie uns – wir melden uns kurzfristig zurück.</p>
    </div>

    <div class="contact-layout">
      <form class="contact-form" @submit.prevent="handleSubmit">
        <div class="contact-form__row">
          <label class="contact-form__field">
            <span>Name</span>
            <input v-model.trim="name" type="text" autocomplete="name" placeholder="Max Mustermann" />
          </label>

          <label class="contact-form__field">
            <span>E-Mail *</span>
            <input
              v-model.trim="email"
              type="email"
              autocomplete="email"
              placeholder="max@beispiel.de"
              required
            />
          </label>
        </div>

        <label class="contact-form__field">
          <span>Betreff</span>
          <input v-model.trim="subject" type="text" placeholder="Anfrage zu Colocation / Cloud / Services" />
        </label>

        <label class="contact-form__field contact-form__field--full">
          <span>Nachricht *</span>
          <textarea
            v-model.trim="message"
            rows="5"
            placeholder="Worum geht es? Welche Anforderungen haben Sie?"
            required
          />
        </label>

        <button type="submit" class="btn btn--primary contact-form__submit">
          Anfrage per E-Mail senden
        </button>
      </form>

      <aside class="contact-info">
        <h3>Direktkontakt</h3>
        <p class="contact-info__highlight">kontakt@grass-merkur.de</p>
        <p>Wir antworten in der Regel innerhalb eines Werktags.</p>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')

const handleSubmit = () => {
  const to = 'kontakt@grass-merkur.de'
  const safeSubject = encodeURIComponent(subject.value || 'Kontaktanfrage')

  const bodyLines = [
    name.value ? `Name: ${name.value}` : null,
    email.value ? `E-Mail: ${email.value}` : null,
    '',
    message.value,
  ].filter((line): line is string => typeof line === 'string')

  const safeBody = encodeURIComponent(bodyLines.join('\n'))
  window.location.href = `mailto:${to}?subject=${safeSubject}&body=${safeBody}`
}
</script>
