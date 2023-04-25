import jax from '../assets/jax.webp'
import kaisa from '../assets/kaisa.webp'
import yuumi from '../assets/yuumi.webp'
import samira from '../assets/samira.webp'
import taliyah from '../assets/taliyah.webp'
import ashe from '../assets/ashe.webp'
import vayne from '../assets/vayne.webp'
import riven from '../assets/riven.webp'
import ekko from '../assets/ekko.webp'
import soraka from '../assets/soraka.webp'
import sejuani from '../assets/sejuani.webp'
import vi from '../assets/vi.webp'
import blitzcrank from '../assets/blitzcrank.webp'
import zed from '../assets/zed.webp'
import chogath from '../assets/chogath.webp'
import rammus from '../assets/rammus.webp'
import ezreal from '../assets/ezreal.webp'
import belveth from '../assets/belveth.webp'
import galio from '../assets/galio.webp'
import gangplank from '../assets/gangplank.webp'
import leesin from '../assets/leesin.webp'
import malphite from '../assets/malphite.webp'
import nasus from '../assets/nasus.webp'
import missfortune from '../assets/missfortune.webp'
import annie from '../assets/annie.webp'
import alistar from '../assets/alistar.webp'
import zoe from '../assets/zoe.webp'
import lulu from '../assets/lulu.webp'
import sivir from '../assets/sivir.webp'
import renekton from '../assets/renekton.webp'
import yasou from '../assets/yasuo.webp'
import nilah from '../assets/nilah.webp'
import fiora from '../assets/fiora.webp'

var itens = [
   {
      id: 0,
      nome: 'Sedenta',
      caracteristica: ['Mr', 'espadalonga'],
      img: '',
   },

   {
      id: 1,
      nome: 'guinço',
      caracteristica: ['BastãoAP', 'VelociadeAt'],
      img: '',
   },

   {
      id: 2,
      nome: 'canhao Fumegante',
      caracteristica: ['VelocidadeAt', 'VelociadeAt'],
      img: '',
   },

   {
      id: 3,
      nome: 'mata Gigantes',
      caracteristica: ['espadaLonga', 'VelociadeAt'],
      img: '',
   },

   {
      id: 4,
      nome: 'statick',
      caracteristica: ['VelocidadeAt', 'gotaMana'],
      img: '',
   },

   {
      id: 5,
      nome: 'Manopla Adordana',
      caracteristica: ['BastãoAP', 'critico'],
      img: '',
   },

   {
      id: 6,
      nome: 'Blue',
      caracteristica: ['gotaMana', 'gotaMana'],
      img: '',
   },

   {
      id: 7,
      nome: 'Shoujin',
      caracteristica: ['espadaLonga', 'gotaMana'],
      img: '',
   },

   {
      id: 8,
      nome: 'Ultimo Susurro',
      caracteristica: ['critico', 'velocidadeAt'],
      img: '',
   },

   {
      id: 9,
      nome: 'runnan',
      caracteristica: ['Mr', 'velocidadeAt'],
      img: '',
   },

   {
      id: 10,
      nome: 'Gume Do infinito',
      caracteristica: ['espetadaLonga', 'critico'],
      img: '',
   }



]
var campeoes = [
   {
      nome: 'Jax',
      itens: [itens[0], itens[1], itens[2]],
      composicaoBase: [riven, ekko, soraka, sejuani, vi, blitzcrank],
      naoBateu: [kaisa, samira, zed],
      caracteristica: 'ap',
      img: jax
   },

   {
      nome: 'Kaisa',
      itens: [itens[1], itens[3], itens[4]],
      composicaoBase: [chogath, rammus, vayne, ezreal, ashe],
      naoBateu: [belveth, samira, zed],
      caracteristica: 'ap',
      img: kaisa
   },

   {
      nome: 'Yuumi',
      itens: [itens[3], itens[5], itens[6]],
      composicaoBase: [galio, malphite, leesin, gangplank, nasus],
      naoBateu: [soraka, missfortune, ezreal],
      caracteristica: 'ap',
      img: yuumi
   },
   {
      nome: 'Taliyah',
      itens: [itens[5], itens[7], itens[3]],
      composicaoBase: [annie, alistar, zoe, lulu, yuumi, ekko],
      naoBateu: [soraka, ezreal, missfortune],
      caracteristica: 'ap',
      img: taliyah
   },
   {
      nome: 'Samira',
      itens: [itens[3], itens[1], itens[8]],
      composicaoBase: [sejuani, ekko, alistar, sivir,vi,ezreal],
      naoBateu: ['kaisa', 'zed', 'vayne'],
      caracteristica: 'ad',
      img: samira
   },

   {
      nome: 'Ashe',
      itens: [itens[3], itens[1], itens[9]],
      composicaoBase: [renekton,yasou, ezreal,leesin, malphite, gangplank],
      naoBateu: ['Samira', , 'zed', 'vayne'],
      caracteristica: 'ad',
      img: ashe

   },
   {
      nome: 'Vayne',
      itens: [itens[9], itens[10], itens[1]],
      composicaoBase: [nilah, zed, zoe, fiora,yasou,gangplank],
      naoBateu: ['belveth ', ' zed', ' vayne'],
      caracteristica: 'ad',
      img: vayne
   }
]

export default campeoes;