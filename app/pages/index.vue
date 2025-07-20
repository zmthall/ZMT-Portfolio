<template>
  <div>
    <div class="h-[100vw] bg-black">
      testing
    </div>
    <LayoutParallax background="/images/pages/index/rocky-mountains.jpg">
      <LayoutContainer>
        <UiCard class="space-y-4">
          <h2>My Journey</h2>
          <p>
            I was born in the heart of Denver, Colorado, and my childhood was marked by a constant dance between the Rockies and the serene beauty of South Dakota. Throughout my early years, I often found myself forging connections with the world, embracing solitude, and diving into a world of technology and computers. The intricacies of computers and their innerworkings fueled a lifelong fascination; one that has continued to shape my path.
          </p>
          <p>
            As I navigated through life, my interests led me on a diverse journey, from one project to another, seeking the next spark of inspiration in an ever-changing world of fascination and inquisition. The turning point came when I discovered the world of web development. A growing fascination for design and the inner workings of the web unveiled a profound passion. The web, I realized, is an arena where creativity knows no bounds, and every project is a canvas for uniqueness to flourish.
          </p>
          <p>
            Driven by a thirst for knowledge, I've cultivated a well-rounded approach to deliver top-notch web solutions, committed to crafting an experience tailored to the needs of those who would desire my services. My mission is simple: to offer a stress-free and transparent web development journey, centered on a personalized approach with quality at it's core.
          </p>
          <h3>
            Beyond Web Development
          </h3>
          <p>
            When I'm not knee-deep in code or crafting web experiences, you'll find me relishing life's simple pleasures. My diverse interests span from crafting crocheted wonders and artful creations to indulging in captivating movies, engrossing books, and exploring the world around me. These pursuits enhance my creativity and foster sharp problem-solving skills, which I utilize in every aspect of my day to day life.
          </p>
          <p>
            Curious to learn more about me? Feel free to keep reading or reach out for a chat about the exciting project you have in mind. Let's explore the possibilities together.
          </p>
          <UiLink to="/about-me" variant="secondary">More About Me</UiLink>
        </UiCard>
      </LayoutContainer>
    </LayoutParallax>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: "HomePage"
})

</script>

<style>

</style>