import {
  Accordion,
  Content,
  Tab,
  Trigger,
} from "@/components/ui/magic-ui/accordion";
import { FAQ_QUESTIONS } from "@/constants";

const FAQ = () => (
  <div className="space-y-8 w-full">
    <div className="flex items-center justify-center gap-x-2">
      <div className="size-3 bg-green-500 rounded-full" />
      <p className="text-lg text-center">FAQ</p>
    </div>
    <p className="text-5xl font-extrabold text-center">{`Got Questions?`}</p>
    <div className="flex w-full justify-center mt-10">
      <div className="w-full max-w-212.5">
        <Accordion>
          {FAQ_QUESTIONS.map((e, i) => {
            return (
              <Tab key={i}>
                <Trigger className="text-black font-bold">{e.question}</Trigger>
                <Content className="text-gray-400 font-semibold">
                  {e.answer}
                </Content>
              </Tab>
            );
          })}
        </Accordion>
      </div>
    </div>
  </div>
);

FAQ.displayName = "FAQ";

export { FAQ };
