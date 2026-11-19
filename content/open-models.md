---
title: "Open Models and Their Licenses"
---

"Open" means different things for different AI models. This page sorts current models by how much their makers release and what the license lets you do with them. Licenses were checked on each model's Hugging Face page on 18 November 2026. They change between versions, so check the model page before relying on this table.

## Three levels of openness

| Level             | What is released                                                              | Examples                         |
| ----------------- | ----------------------------------------------------------------------------- | -------------------------------- |
| Closed            | Nothing. The model is only available through the company's app or service     | GPT, Claude, Gemini              |
| Open weights      | The trained model file (the "weights"), which anyone can download and run     | Qwen3, Gemma 4, Llama 4          |
| Fully open        | The weights plus the training data and training code                          | OLMo 3, SmolLM3, Apertus         |

Most models described as "open" are open weights. You can run, study, and modify them, but you cannot see what they were trained on. The Open Source Initiative's [Open Source AI Definition](https://opensource.org/ai/open-source-ai-definition) also asks for the training code and detailed information about the training data, which most open-weight models do not provide.

## Fully open: weights, training data, and training code

| Model                                                                       | Maker                   | License                                                              | Runs on a 16 GB laptop |
| --------------------------------------------------------------------------- | ----------------------- | -------------------------------------------------------------------- | ---------------------- |
| [OLMo 3](https://huggingface.co/allenai/Olmo-3-7B-Instruct)                 | Allen Institute for AI  | [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)            | Yes (7B)               |
| [SmolLM3](https://huggingface.co/HuggingFaceTB/SmolLM3-3B)                  | Hugging Face            | [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)            | Yes (3B)               |
| [Apertus](https://huggingface.co/swiss-ai/Apertus-8B-Instruct-2509)         | Swiss AI (ETH, EPFL)    | [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0), plus an acceptable use policy | Yes (8B); 70B no |

## Open weights with a permissive license

These have no restrictions on use, but their training data is not published.

| Model                                                                                   | Maker              | License                                                     | Runs on a 16 GB laptop     |
| --------------------------------------------------------------------------------------- | ------------------ | ----------------------------------------------------------- | -------------------------- |
| [Qwen3](https://huggingface.co/Qwen/Qwen3-8B)                                           | Alibaba            | [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)   | Yes (up to 8B)             |
| [Qwen3.6](https://huggingface.co/Qwen/Qwen3.6-27B)                                      | Alibaba            | [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)   | No (27B)                   |
| [Qwen3.8 27B](https://huggingface.co/Qwen/Qwen3.8-27B-FP8)                              | Alibaba            | [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)   | No                         |
| [Gemma 4 E4B](https://huggingface.co/google/gemma-4-E4B-it)                             | Google             | [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)   | Yes                        |
| [Gemma 4 31B](https://huggingface.co/google/gemma-4-31B-it)                             | Google             | [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)   | No                         |
| [gpt-oss](https://huggingface.co/openai/gpt-oss-20b)                                    | OpenAI             | [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)   | 20B barely; 120B no        |
| [Magistral Small](https://huggingface.co/mistralai/Magistral-Small-2509)                | Mistral            | [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)   | No (24B)                   |
| [Mistral Small 3.2](https://huggingface.co/mistralai/Mistral-Small-3.2-24B-Instruct-2506) | Mistral          | [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)   | No (24B)                   |
| [Granite 4](https://huggingface.co/ibm-granite/granite-4.2-8b)                          | IBM                | [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)   | Yes (3B, 8B)               |
| [ERNIE 4.5](https://huggingface.co/baidu/ERNIE-4.5-21B-A3B-Thinking)                    | Baidu              | [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)   | Small versions only        |
| [Hy3](https://huggingface.co/tencent/Hy3)                                               | Tencent            | [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)   | No                         |
| [Inkling 2 Small](https://huggingface.co/thinkingmachines/Inkling-2-Small)              | Thinking Machines  | [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)   | No (594B)                  |
| [Phi-4](https://huggingface.co/microsoft/phi-4)                                         | Microsoft          | [MIT](https://opensource.org/license/mit)                   | Yes (14B, tight)           |
| [DeepSeek V4](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)                     | DeepSeek           | [MIT](https://opensource.org/license/mit)                   | No                         |
| [GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)                                       | Z.ai               | [MIT](https://opensource.org/license/mit)                   | No                         |
| [Nemotron 3 Ultra](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16) | NVIDIA            | [OpenMDW-1.1](https://openmdw.ai/license/1-1/)              | No (550B)                  |

## Open weights with a custom license

Read the terms before using these. Some restrict who may use the model, for what, or at what scale.

| Model                                                                                    | Maker       | License                                                                                                                      |
| ---------------------------------------------------------------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [Llama 4](https://huggingface.co/meta-llama/Llama-4-Scout-17B-16E-Instruct)              | Meta        | Llama 4 license; download requires Meta's approval                                                                           |
| [Llama 3.1](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct)                     | Meta        | Llama 3.1 license; download requires Meta's approval                                                                         |
| [Nemotron 3 Nano](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Nano-30B-A3B-BF16)     | NVIDIA      | [NVIDIA Nemotron Open Model License](https://www.nvidia.com/en-us/agreements/enterprise-software/nvidia-nemotron-open-model-license/) |
| [Kimi K2](https://huggingface.co/moonshotai/Kimi-K2-Thinking)                            | Moonshot AI | Modified MIT                                                                                                                 |
| [Kimi K3](https://huggingface.co/moonshotai/Kimi-K3)                                     | Moonshot AI | Custom (kimi-k3)                                                                                                             |
| [GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)                                        | Z.ai        | Custom (glm-5.3)                                                                                                             |
| [MiniMax M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)                            | MiniMax     | Custom                                                                                                                       |
| [LFM 2.5 and LFM3](https://huggingface.co/LiquidAI)                                      | Liquid AI   | LFM 1.0 license                                                                                                              |
| [ERNIE 5.5 Flash](https://huggingface.co/baidu/ERNIE-5.5-Flash-Base)                     | Baidu       | Custom                                                                                                                       |
| [Qwen3.8 2.4T](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)                            | Alibaba     | Custom (qwen3.8-max)                                                                                                         |
| [Mistral Large 4](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B-NVFP4)        | Mistral     | Listed only as "other"                                                                                                       |

## Open weights, non-commercial only

| Model                                                                     | Maker  | License                                                                                                     |
| ------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------- |
| [Command R](https://huggingface.co/CohereLabs/c4ai-command-r-v01)         | Cohere | [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/); download requires accepting Cohere's terms |
| [Aya Expanse](https://huggingface.co/CohereLabs/aya-expanse-8b)           | Cohere | [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/); download requires accepting Cohere's terms |

## What the licenses mean

- [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0) and [MIT](https://opensource.org/license/mit) are long-standing open-source software licenses. You may use, change, and share the model for any purpose, as long as you keep the license and copyright notices.
- [OpenMDW-1.1](https://openmdw.ai/license/1-1/) (Open Model, Data and Weights) is a license from the Linux Foundation written for AI models rather than software. It covers the weights, code, documentation, and any datasets in a release together. Like Apache-2.0, it is permissive: keep the license and notices when you share the model. It also states that anything the model generates is free of license conditions.
- Custom licenses are written by the model's maker. Read each one: they can ban some uses, limit very large companies, or require you to request access.
- [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) is a Creative Commons license that forbids commercial use.

A permissive license on the weights does not mean the training data was released. A model can be Apache-2.0 and still only be open weights.

## Patterns worth noticing

- Licenses change between versions. Gemma 1 to 3 used Google's restrictive Gemma terms and required approval to download. Gemma 4 moved to Apache-2.0. GLM-5 to 5.2 are MIT, but GLM-5.3 has a custom license.
- A company's largest model is often its most restricted. Qwen's smaller models are Apache-2.0, while its 2.4-trillion-parameter flagship has a custom license. NVIDIA's small Nemotron uses NVIDIA's own license, while the large one uses OpenMDW.
- Only three models here publish their training data.

## Running them yourself

OLMo 3, Qwen3, Gemma 4, and Granite 4 can be downloaded inside the Ollama app:

- [olmo-3](https://ollama.com/library/olmo-3)
- [qwen3](https://ollama.com/library/qwen3)
- [gemma4](https://ollama.com/library/gemma4)
- [granite4](https://ollama.com/library/granite4)

SmolLM3 and Apertus are not in Ollama's official library, so they are harder to run without a terminal.

## How to check a model yourself

1. Find the model on [huggingface.co](https://huggingface.co).
2. Look for the license in the right-hand column of the model page.
3. A license such as `apache-2.0`, `mit`, or `openmdw-1.1` means permissive open weights.
4. "Other", a custom name, or a page that asks you to accept terms before downloading means there are restrictions. Read them.
5. To check whether a model is fully open, look in the model card for links to its training data and training code.
