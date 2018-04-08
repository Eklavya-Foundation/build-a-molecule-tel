// Copyright 2013-2015, University of Colorado Boulder

/*
 * 1st screen: collection boxes only take 1 molecule, and our 1st kit collection is always the same
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */ 
define( function( require ) {
  'use strict';

  var buildAMolecule = require( 'BUILD_A_MOLECULE/buildAMolecule' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Dimension2 = require( 'DOT/Dimension2' );
  var BAMScreen = require( 'BUILD_A_MOLECULE/screens/BAMScreen' );
  var KitCollection = require( 'BUILD_A_MOLECULE/model/KitCollection' );
  var Kit = require( 'BUILD_A_MOLECULE/model/Kit' );
  var CollectionBox = require( 'BUILD_A_MOLECULE/model/CollectionBox' );
  var MoleculeList = require( 'BUILD_A_MOLECULE/model/MoleculeList' );
  var LayoutBounds = require( 'BUILD_A_MOLECULE/model/LayoutBounds' );
  var Bucket = require( 'BUILD_A_MOLECULE/model/Bucket' );
  var Element = require( 'NITROGLYCERIN/Element' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var MoleculeCollectingView = require( 'BUILD_A_MOLECULE/view/MoleculeCollectingView' );

  // strings
  var titleMakeMoleculeString = require( 'string!BUILD_A_MOLECULE/title.makeMolecule' );

  function MakeMoleculeScreen( collectionAreaWidth ) {

    var options = {
      name: titleMakeMoleculeString,
      homeScreenIcon: new Rectangle( 0, 0, 548, 373, { fill: 'red' } )
    };

    BAMScreen.call( this,
      // createInitialKitCollection
      function( bounds, clock ) {
        var kitCollection = new KitCollection();
        kitCollection.addKit( new Kit( bounds, [
          new Bucket( new Dimension2( 400, 200 ), clock, Element.H, 2 ),
          new Bucket( new Dimension2( 350, 200 ), clock, Element.O, 1 )
        ] ) );
        kitCollection.addKit( new Kit( bounds, [
          new Bucket( new Dimension2( 400, 200 ), clock, Element.H, 2 ),
          new Bucket( new Dimension2( 450, 200 ), clock, Element.O, 2 )
        ] ) );
        kitCollection.addKit( new Kit( bounds, [
          new Bucket( new Dimension2( 350, 200 ), clock, Element.C, 1 ),
          new Bucket( new Dimension2( 450, 200 ), clock, Element.O, 2 ),
          new Bucket( new Dimension2( 500, 200 ), clock, Element.N, 2 )
        ] ) );
        kitCollection.addCollectionBox( new CollectionBox( MoleculeList.H2O, 1 ) );
        kitCollection.addCollectionBox( new CollectionBox( MoleculeList.O2, 1 ) );
        kitCollection.addCollectionBox( new CollectionBox( MoleculeList.H2, 1 ) );
        kitCollection.addCollectionBox( new CollectionBox( MoleculeList.CO2, 1 ) );
        kitCollection.addCollectionBox( new CollectionBox( MoleculeList.N2, 1 ) );
        return kitCollection;
      },

      // layoutBounds
      new LayoutBounds( false, collectionAreaWidth ), function( bounds, clock ) {
        return BAMScreen.generateKitCollection( false, 5, clock, bounds );
      },

      // createKitCollection
      function( model ) {
        // create the view
        return new MoleculeCollectingView( model, true, function() {
          // next collection callback
          model.addCollection( BAMScreen.generateKitCollection( false, 5, model.clock, model.layoutBounds ) );
        } );
      },

      options );
  }

  buildAMolecule.register( 'MakeMoleculeScreen', MakeMoleculeScreen );

  inherit( BAMScreen, MakeMoleculeScreen );

  return MakeMoleculeScreen;
} );
