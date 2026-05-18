# Suta Farm Website

![Suta Farm logo](pictures/logo.jpg)

Suta Farm is a Jekyll website for a family-owned farm in Mount Pleasant, North Carolina. The site lists available goats, lambs, and chickens, shows pricing, supports order requests, links to Square checkout, and includes Donate and About Us pages.

## Website Features

- Responsive storefront for phone, laptop, and desktop screens
- Available goats, lambs, and chickens listed from `_data/animals.yml`
- Animal photos stored locally in the `pictures` folder
- Price range of `$300-$500` for listed animals
- Meat order option at `$12 per pound`
- Square payment and donation links managed in `_config.yml`
- About Us page describing Suta Farm's natural and sustainable practices

## Sustainable Animal Raising

At Suta Farm, goats and lambs are raised on open pasture where they can graze naturally, roam comfortably, and grow at a healthy pace. The farm focuses on low-stress animal care, clean daily water, natural feeding practices, and avoiding unnecessary hormones.

Rotational grazing helps protect the land by reducing overgrazing and supporting healthier soil. Moving animals between grazing areas gives pastures time to recover, supports stronger forage, and helps preserve the farm for future generations.

Suta Farm's mission is to raise healthy goats and lambs naturally, produce fresh local meat, farm responsibly, and serve the community with honesty and care.

## Local Development

Install Ruby, Bundler, and Jekyll, then run:

```bash
bundle install
bundle exec jekyll serve
```

Then open:

```text
http://localhost:4000
```

## Main Files

```text
_config.yml              Site settings, contact info, Square links
_data/animals.yml        Inventory for goats, lambs, and chickens
index.html               Main storefront and order form
about.markdown           Naturally Raised at SUTA FARM page
donate.html              Donation page
assets/css/store.css     Responsive styling
assets/js/store.js       Filtering and order total behavior
pictures/                Logo and farm animal images
```

How to Run: "bundle exec jekyll serve"
