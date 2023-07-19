import { Layout, Page, Text, List } from '@vercel/examples-ui'

export default function Index() {
  return (
    <Page>
      <Text variant="h2" className="mb-6">
        Verificación exitosa.
      </Text>
      <List>
        <li></li>
        <li></li>
      </List>
    </Page>
  )
}

Index.Layout = Layout
