module.exports = {
    schema: [
        {
            'https://graphql.bitquery.io': {
                headers: {
                    'X-API-KEY': 'BQYh2ciuYOJjrLWgXYHv3V8Ra94AzTlf',
                },
            },
        },
    ],
    documents: ['./src/**/*.tsx', './src/**/*.ts'],
    overwrite: true,
    generates: {
        './src/graphql/generated.tsx': {
            plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
            config: {
                skipTypename: false,
                withHooks: true,
                withHOC: false,
                withComponent: false,
                namingConvention: {
                    typeNames: 'keep',
                    enumValues: 'keep',
                    transformUnderscore: true,
                },
            },
        },
        './graphql.schema.json': {
            plugins: ['introspection'],
        },
    },
};
