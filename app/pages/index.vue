<template>
  <div>
    <div class="sm:h-[100vh] bg-black relative">
      <NuxtImg src="/images/pages/index/face-thallas.png"  class="hidden sm:block sm:absolute sm:bottom-0 sm:right-0 sm:h-full sm:object-cover sm:opacity-25"/>
      <div class="image-box-shadow relative sm:hidden">
        <NuxtImg src="/images/pages/index/face-thallas-full.jpg" class="w-full" />
      </div>
      <div>
        <UiCard class="space-y-4 bottom-0 sm:absolute md:relative md:w-1/2 w-full">
          <h1>
            Front-End Web Development
          </h1>
          <p>
            I'm Zachary Thallas, a self-taught web developer who is passionate about quality over quantity. My mission is clear: to provide the best web development services for you. Whether you're a small business owner, a creative individual, or a growing startup, I'm here to turn your web dreams into reality.
          </p>
          <h2>
            What I Offer
          </h2>
          <p>
            My focus is on content-driven web design, telling your unique story through your website. I'm not just about creating websites; I'm about crafting web experiences that resonate with your audience, align with your brand, and drive results. Let's work together to create something exceptional.
          </p>
          <p>
            Ready to get started? Explore my work and projects to see what I can do for you.
          </p>
          <UiLink to="/projects">Explore My Work</UiLink>
        </UiCard>
      </div>
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

<style scoped>
 .image-box-shadow::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 .4rem .4rem #000;
    z-index: 1;
    background: rgba(0,0,0,.3);
  }
</style>