import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Search } from "lucide-react";
import { useDashboard } from "../Dashboard/useDashboard";
import { useState } from "react";
import { UsePatientsController } from "../Pacients/usePatientsController";

export function Header() {
  const { openNewPatientModal } = useDashboard();
  const { handleSearch, clearSearch } = UsePatientsController();
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchClick = () => {
    if (searchTerm.trim() !== "") {
      handleSearch(searchTerm);
    } else {
      clearSearch();
    }
  };

  return (
    <header className="flex flex-col md:flex-row items-center justify-between mx-4 mt-4 gap-2">
      <div className="flex items-center gap-1 md:gap-4">
        <h1 className="text-card font-semibold text-md md:text-4xl">Pacientes:</h1>
        <div className="flex items-center gap-1">
          <Input 
            name="search"
            placeholder="Pesquisar paciente"
            className="md:w-96 items-center border-border"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button 
            className="text-white bg-card px-3"
            onClick={onSearchClick}
          >
            <Search />
          </Button>
        </div>
      </div>
      <div>
        <Button 
          className="flex text-base text-white bg-card"
          onClick={openNewPatientModal}
        >
          Novo Paciente
        </Button>
      </div>
    </header>
  );
}
