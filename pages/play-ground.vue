<script lang="ts" setup>
/**
 *
 * Component Description:Desc
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
</script>

<template>
  <main class="main bg-dots">
    <div class="cards">
      <div class="card">
        <div class="card__container">
          <div class="card__front" data-js="card__front">
            <div class="card__front--banner">
              <p>Explainer</p>
            </div>
            <div class="card__front--tab">
              <p>Javascript</p>
            </div>
            <div class="card__front--main">
              <h2>Array.filter()</h2>
              <ol>
                <li>Take an Array</li>
                <li>A callback function filters the array</li>
                <li>Filter is applied to each array item</li>
                <li>
                  If the value matches the filter (truthy), it's added to a new array
                </li>
                <li>If it doesn't match (falsy), ignore it</li>
                <li>Returns a new array</li>
              </ol>
            </div>
          </div>
          <div class="card__back" data-js="back__card">
            <div class="card__back--banner">
              <p>Example</p>
            </div>
            <div class="card__back--tab">
              <p>Javascript</p>
            </div>
            <div class="card__back--main">
              <h2>Array.filter( )</h2>
              <code>var fruits = ['pear', 'banana', 'plum'];</code><small class="card__back--main___comment">Fruits contains an array with 3 strings</small><code>const result = fruits.filter(fruit => fruit.length</code><small class="card__back--main___comment">Fruit represents each array item</small><code>console.log(result);</code><small class="card__back--main___comment">Values less than 5 characters are added to a new array and stored in
                result</small><code>// output: Array ['pear', 'plum']</code>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card__container">
          <div class="card__front" data-js="card__front">
            <div class="card__front--banner">
              <p>Explainer</p>
            </div>
            <div class="card__front--tab">
              <p>Javascript</p>
            </div>
            <div class="card__front--main">
              <h2>Array.filter()</h2>
              <ol>
                <li>Take an Array</li>
                <li>A callback function filters the array</li>
                <li>Filter is applied to each array item</li>
                <li>
                  If the value matches the filter (truthy), it's added to a new array
                </li>
                <li>If it doesn't match (falsy), ignore it</li>
                <li>Returns a new array</li>
              </ol>
            </div>
          </div>
          <div class="card__back" data-js="back__card">
            <div class="card__back--banner">
              <p>Example</p>
            </div>
            <div class="card__back--tab">
              <p>Javascript</p>
            </div>
            <div class="card__back--main">
              <h2>Array.filter( )</h2>
              <code>var fruits = ['pear', 'banana', 'plum'];</code><small class="card__back--main___comment">Fruits contains an array with 3 strings</small><code>const result = fruits.filter(fruit => fruit.length</code><small class="card__back--main___comment">Fruit represents each array item</small><code>console.log(result);</code><small class="card__back--main___comment">Values less than 5 characters are added to a new array and stored in
                result</small><code>// output: Array ['pear', 'plum']</code>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card__container">
          <div class="card__front" data-js="card__front">
            <div class="card__front--banner">
              <p>Explainer</p>
            </div>
            <div class="card__front--tab">
              <p>Javascript</p>
            </div>
            <div class="card__front--main">
              <h2>Array.filter()</h2>
              <ol>
                <li>Take an Array</li>
                <li>A callback function filters the array</li>
                <li>Filter is applied to each array item</li>
                <li>
                  If the value matches the filter (truthy), it's added to a new array
                </li>
                <li>If it doesn't match (falsy), ignore it</li>
                <li>Returns a new array</li>
              </ol>
            </div>
          </div>
          <div class="card__back" data-js="back__card">
            <div class="card__back--banner">
              <p>Example</p>
            </div>
            <div class="card__back--tab">
              <p>Javascript</p>
            </div>
            <div class="card__back--main">
              <h2>Array.filter( )</h2>
              <code>var fruits = ['pear', 'banana', 'plum'];</code><small class="card__back--main___comment">Fruits contains an array with 3 strings</small><code>const result = fruits.filter(fruit => fruit.length</code><small class="card__back--main___comment">Fruit represents each array item</small><code>console.log(result);</code><small class="card__back--main___comment">Values less than 5 characters are added to a new array and stored in
                result</small><code>// output: Array ['pear', 'plum']</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.main {
// background: var(--color-body);
  // background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4"%3E%3Cpath fill="%239C92AC" fill-opacity="0.4" d="M1 3h1v1H1V3zm2-2h1v1H3V1z"%3E%3C/path%3E%3C/svg%3E');
  min-height: 100vh;
}
.cards {
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: minmax(360px, max-content);
  grid-gap: 30px;
  margin: 0 auto;
  padding: 2rem 1rem;
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 660px) {
    grid-template-columns: 1fr;
    padding: 2rem 2rem;
  }
}
.card {
  position: relative;
  &__container {
    position: relative;
    min-height: 40rem;
    transform-style: preserve-3d;
    transform: perspective(500px) rotateY(0deg);
    transition: all ease-in-out 0.5s;
  }
  &:hover &__container {
    transform: perspective(500px) rotateY(180deg);
    // transform: rotateY(180deg);
    .card__front {
      opacity: 0;
    }
    .card__back {
      opacity: 1;

    }
  }
  &__front.active {
    z-index: -1;
  }
  &__front,
  &__back {
    position: absolute;
    inset: 0;
    opacity: 1;

    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transition: all 0.5s ease-in-out;
    font-weight: 400;
    box-shadow: 0.5rem 0.5rem var(--main-color);

    border: 2px solid var(--main--strongColor);
    border-top-color: transparent;
    border-radius: 0.5rem;

    overflow: hidden;

    &--banner {
      background: var(--main--strongColor);

      padding: 1rem 4rem;
      position: absolute;
      top: 10px;
      right: -3.7rem;

      transform: rotate(45deg);
    }
    &--tab {
      background: var(--secondary-color);
      color: var(--color--white);
      padding: 0.5rem 1rem;

      font-weight: 300;
    }
    &--main {
      padding: 2rem 1rem;
      line-height: 1.5;
    }
  }
  &__back {
    transform: perspective(500px) rotateY(180deg);
    z-index: 1;
    transition: all 0.5s ease-in-out;
    opacity:0;
    code {
      display: block;
      background: var(--secondary-color);
      padding: 1rem 0.5rem;
      font-weight: 900;
      font-size: inherit;
      font-style: italic;
    }
    &--main {
      &___comment {
        color: rgba(#000, 0.6);
      }
    }
  }
  &__back.active,
  &__front {
    opacity: 1;
    z-index: 200;
  }
}
</style>
