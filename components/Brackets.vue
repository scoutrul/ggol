<template lang="pug">
  v-layout.tournament-brackets
    v-layout(column).flex.round(:key='index' :class='`round-${round}`' v-for='(round, index) in rounds')
      v-flex.match(:key='matchIndex' v-for='(match, matchIndex) in round')
        .match__content {{ ++matchIndex}} of {{round}}
</template>

<script>
const defaultRounds = [256, 128, 64, 32, 16, 8, 4, 2, 1]

export default {
  props: {
    bracketSize: {
      type: Number,
      default: 8
    }
  },
  computed: {
    rounds() {
      return defaultRounds.filter((rounds) => rounds <= this.bracketSize)
    }
  }
}
</script>

<style>
.match__content {
  border: 2px solid green;
  width: 100%;
  height: 30px;
  position: relative;
}
.round {
}

.round:first-child .match::before {
  display: none;
}

.round:first-child .match__content::before {
  display: none;
}

.round:last-child .match::after {
  display: none;
}

.match {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 10px;
  padding: 6px 0;
  flex-grow: 1;
  position: relative;
}

.match::before {
  content: '';
  display: block;
  min-height: 30px;
  border-left: 2px solid purple;
  position: absolute;
  left: -10px;
  top: 50%;
  margin-top: -15px;
  margin-left: -2px;
}

.match:nth-child(odd)::after {
  content: '';
  display: block;
  border: 2px solid transparent;
  border-top-color: purple;
  border-right-color: purple;
  height: 50%;
  position: absolute;
  right: -10px;
  width: 10px;
  top: 50%;
}

.match:nth-child(even)::after {
  content: '';
  display: block;
  border: 2px solid transparent;
  border-bottom-color: purple;
  border-right-color: purple;
  height: 50%;
  position: absolute;
  right: -10px;
  width: 10px;
  bottom: 50%;
}

.match__content::before {
  content: '';
  display: block;
  width: 10px;
  border-bottom: 2px solid purple;
  margin-left: -2px;
  position: absolute;
  top: 50%;
  left: -10px;
}
</style>
