# Starter Blank Theme

A blank starter theme. Preview: [https://starter-blank-preview.lamnhan.com](https://starter-blank-preview.lamnhan.com)

## Getting started

To use this theme, clone this repo, or using [the Mola all-in-one CLI](https://mola.lamnhan.com):

```sh
npx @molacms/cli new blank <projectName>

# CLI params & options:
# mola new blank <projectName> [appUrl] [appName] [appDescription] --i18n --deploy [service]

# Example:
# mola new blank foo "foo.com" "Foo App" "The Awesome Foo Web App" --deploy github
```

Project scripts:

- `npm run build`: build the web app
- `npm run deploy`: deploy the web app

## Modify content

You may also want to modify or delete these items:

- **package.json**: Change properties

Want to support multiple themes with [Unistylus](https://unistylus.lamnhan.com):

**// TODO**: Add docs ...

## Add content

- Add a component (manually adding `[name].module.ts` after the command):

```sh
npx ng g c components/[name] --skip-import
```

- Add a page:

```sh
npx ng g m pages/[name] --route [name] --module app.module
```

## License

This theme is released under the [MIT](https://github.com/themolacms/starter-blank/blob/master/LICENSE) license.
