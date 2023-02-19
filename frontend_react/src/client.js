
import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'kdqeia5v',
    dataset: 'production',
    apiVersion: '2022-12-28',
    useCdn: true,
    token: 'skX344AdhmNsY3lcQ9ZKgqx1mDt55LbPhiirB0Zx3Y49xUkdEpMvvtgVmBnIPfqvodzBeNvcOQvKIlcF9lxZFZHuZSgoiBTqcGmzeloB9R7avyboLqMW2gfd7AA19yLx3QytH7qc3w1aJcx5binB5HTOxCRxB9RGjf6E95LmZwA682eqDJLA'
    // token: process.env.TOKEN
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
