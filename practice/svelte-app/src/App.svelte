<script lang="ts">
  import "./app.css";
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query'

  const queryClient = new QueryClient()
</script>

<div>
  <QueryClientProvider client={queryClient}>
    <div>App body</div>
  </QueryClientProvider>
</div>
