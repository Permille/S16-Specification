# Introduction

Sigma16 is a fantasy assembly language designed to be simple to use and understand by people who have no prior experience writing assembly code. Its main purpose is to teach University students low-level programming principles.

Sigma16 was originally designed and developed by John T. O'Donnell. This specification aims to clearly document how Sigma16 works, so that it can be useful for other implementers and end-users of Sigma16.

## Overview

This document specifies the text format, binary format, execution model, and instruction set of Sigma16. These four areas are specified separately to allow as much flexibility as possible. For example, it should be possible to design a new text format without affecting the other three parts of the standard.

Here is an overview of the sections, and what they specify:

- **Text format**: This describes the syntax of Sigma16 in plain-text format.

- **Binary format**: This describes the encoding of compiled instructions in linear memory.

- **Execution model**: This describes describes the linear memory, instruction registers, and control registers. It specifies how instructions are decoded and executed, and the effects that this has on the state of the program.

- **Instruction set**: This describes the standard instruction set of Sigma16.

## Design Goals

The design goals of Sigma16 are as follows:

- **Ease of use**: Sigma16 has been designed with ease of use in mind. It is intended to have a shallow learning curve so that people who have never written Assembly code will find it easy to use.

- **Portability**: Sigma16 has been designed such that it is platform-independent, and its specification can be implemented in a broad range of environments, such as web browsers, standalone programs, and more.

## Future versions of this specification

As the specification has not yet been finalised, there are currently no committments towards backwards-compatibility between versions.