# Zom - A Zomato CLI tool

A simple cli tool to interact with [Zomato APIs](https://developers.zomato.com) via CLI.

Requires Node v4+

```bash
# Installation
$ npm i zom -g
# Usage
$ zom Starbucks@Delhi
Starbucks (⭐️ ⭐️ ⭐️  3.9 Very Good)
    🕸  https://www.zomato.com/ncr/starbucks-1-connaught-place-new-delhi?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1
    🗺A Block A, Hamilton House, Connaught Place, New Delhi
    🍕  Cafe
    💸  Rs. 750 for 2

Starbucks (⭐️ ⭐️ ⭐️  3.9 Very Good)
    🕸  https://www.zomato.com/ncr/starbucks-saket-delhi?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1
    🗺A Ground Floor, Select Citywalk Mall, Saket, New Delhi
    🍕  Cafe
    💸  Rs. 750 for 2

Starbucks (⭐️ ⭐️ ⭐️ ⭐️  4.0 Very Good)
    🕸  https://www.zomato.com/ncr/starbucks-connaught-place-new-delhi?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1
    🗺A N-16, N Block, Near Rajiv Chowk Metro Gate 7, Outer Circle, Connaught Place, New Delhi
    🍕  Cafe
    💸  Rs. 750 for 2
```

## Why ?
Why not ? 🙃

Seriously though, sometimes team parties are decided mid work and it's great to not to have to open browser and search when you can simply use a quick CLI tool.

### Todo
* [ ] Use `~/.zomatoclirc` to save settings like location etc
* [ ] Use client location if not specified.
* [ ] Add parameters for better searches

#### License
MIT
