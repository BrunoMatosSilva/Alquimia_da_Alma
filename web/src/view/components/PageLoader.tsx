import { Spinner } from "@/components/Spinner";
import { Transition } from "@headlessui/react"

interface PageLoaderProps {
  isLoading: boolean;
}

export function PageLoader({ isLoading }:PageLoaderProps) {
  return(
    <Transition
        show={isLoading}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
      <div className="bg-background fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <Spinner />
      </div>
    </Transition>
  )
}