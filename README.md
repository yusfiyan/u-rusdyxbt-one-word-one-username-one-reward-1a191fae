[![make.fun](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![rank](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/yusfiyan/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/rank.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![reward](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/yusfiyan/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/reward.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)

# One Word, One Username, One Reward

Entry for the [One Word, One Username, One Reward](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae) bounty on [make.fun](https://make.fun/r/kgxbmb08).

Send your own make.fun username as one word and nothing else. A judge model compares two usernames at a time and picks the funnier or more interesting one. The handle that wins most often takes the reward.

## The word

**quokka**

The happiest animal on Earth — a small marsupial that looks like it is smiling in every photo. It reads as a real handle, it raises a smile on the first read, and once you've seen it you don't forget it. A name its owner would happily wear.

## How it works

`main.ts` (Node, stdlib only) writes the single word to `$MAKEFUN_OUTPUT_DIR/entry.txt` and nothing else. A gate guard validates the entry first: exactly one word, 1–30 characters, no whitespace — matching the sealed scorer's gate.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
# quokka
```

## License

MIT — see [LICENSE](LICENSE).
