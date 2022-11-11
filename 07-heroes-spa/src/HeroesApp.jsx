import { AuthProvidex } from "./auth"
import { AppRouter } from "./router/AppRouter"

export const HeroesApp = () => {
  return (
    <AuthProvidex>
      <AppRouter />
    </AuthProvidex>
  )
}
