import { Button } from '@/components/documentation/Button'
import { Heading } from '@/components/documentation/Heading'

const guides = [
  {
    href: '/documentation/api_reference',
    name: 'Getting Started',
    description: 'Learn how to authenticate your API requests.',
  },
  {
    href: '/documentation/api_reference/middlewares',
    name: 'Middlewares, Events and Websockets',
    description: 'Learn about Middlewares, Events and Websockets in Robyn.',
  },
  {
    href: '/documentation/api_reference/file-uploads',
    name: 'File Uploads',
    description:
      'Learn how to upload and download files to your server using Robyn.',
  },
  {
    href: '/documentation/api_reference/templating',
    name: 'Templating',
    description: 'Learn how to use templating in Robyn.',
  },
  {
    href: '/documentation/api_reference/custom-exception-handling',
    name: 'Exception Handling',
    description: 'Learn About Custom Exception Handling in Robyn.',
  },
  {
    href: '/documentation/api_reference/advanced-features',
    name: 'Advanced Features',
    description: 'Lear about advanced features in Robyn.',
  },
  {
    href: '/documentation/api_reference/authentication',
    name: 'Authentication',
    description: 'Learn About Authentication in Robyn.',
  },
  {
    href: '/documentation/api_reference/const_requests',
    name: 'Const Requests',
    description: 'Learn About Const Requests in Robyn.',
  },

  {
    href: '/documentation/api_reference/cors',
    name: 'CORS',
    description: 'Learn About CORS in Robyn.',
  },
  {
    href: '/documentation/api_reference/views',
    name: 'Code Organisation',
    description: 'Learn About Code Organisation in Robyn.',
  },
]

export function ApiDocs() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="api_docs">
        Api Docs
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {guides.map((guide) => (
          <div key={guide.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {guide.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {guide.description}
            </p>
            <p className="mt-4">
              <Button href={guide.href} variant="text" arrow="right">
                Read more
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}