import { Github, FileVideo, Upload, Wand2 } from "lucide-react";
import { Button } from "./components/ui/button";
import { ModeToggle } from "./components/ui/mode-toggle";
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Slider } from "./components/ui/slider";

export function App() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b border-secondary">
        <h1 className="text-xl font-bold text-primary">upload.ai</h1>

        <div className="flex items-center justify-center gap-3">
          <span className="text-foreground">
            Desenvolvido com ❤️ no NLW da Rocketseat
          </span>
          <Separator orientation="vertical" className="h-6" />
          <Button
            variant="outline"
            className="bg-primary text-primary-foreground"
          >
            <Github className="w4 h-4 mr-2" />
            GitHub
          </Button>
          <ModeToggle />
        </div>
      </div>
      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Inclua o prompt para a IA..."
            />
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Resultado gerado pela IA..."
              readOnly
            />
          </div>
          <p className="text-small text-muted-foreground">
            Lembre-se: Você pode utilizar a variável{" "}
            <code className="text-violet-400">{"{transcription}"}</code> no seu
            prompt para adicionar o conteúdo da transcrição no video
            selecionado.
          </p>
        </div>
        <aside className="w-80 space-y-6">
          <form className="space-y-6 ">
            <label
              htmlFor="video"
              className="border flex rounder-md aspect-video cursor-pointer border-dashed text-small flex-col gap-2 items-center justify-center text-foreground hover:bg-primary/20"
            >
              <FileVideo className="w-4 h4" />
              Selecione um video
            </label>
            <input
              type="file"
              id="video"
              accept="video/mp4"
              className="sr-only"
            />

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="transcription_prompt">
                Prompt de transcrição
              </Label>
              <Textarea
                id="transcription_prompt"
                className="h-20 leading-relaxed resize-none bg-secondary text-secondary-foreground"
                placeholder="Inclua palavras-chave mencionadas no video separadas por vírgula (,)"
              />
            </div>

            <Button type="submit" className="w-full text-primary-foreground">
              Carregar Video <Upload className="w-4 h-4 ml-2" />{" "}
            </Button>
          </form>
          <Separator />
          <form className="space-y-6">
            <div className="space-y-2">
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground">
                  <SelectValue placeholder="Selecione um prompt" />
                </SelectTrigger>
                <SelectContent className="bg-secondary text-secondary-foreground">
                  <SelectItem
                    value="title"
                    className="focus:bg-primary focus:text-primary-foreground"
                  >
                    Título do YouTube
                  </SelectItem>
                  <SelectItem
                    value="description"
                    className="focus:bg-primary focus:text-primary-foreground"
                  >
                    Descrição do YouTube
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Modelo</Label>
              <Select defaultValue="gpt3.5" disabled>
                <SelectTrigger className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-secondary text-secondary-foreground">
                  <SelectItem value="gpt3.5">GPT 3.5-Turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic">
                Você poderá customizar essa opção em breve
              </span>
            </div>

            <Separator />

            <div className="space-y-4">
              <Label>Temperatura</Label>
              <Slider min={0} max={1} step={0.1} defaultValue={[0.5]} />

              <span className="block text-xs text-muted-foreground italic leading-relaxed">
                Valores mais altos tendem a deixar o resultado mais criativo e
                com possíveis erros.
              </span>
            </div>
            <Separator />
            <Button type="submit" className="w-full">
              Executar <Wand2 className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  );
}
